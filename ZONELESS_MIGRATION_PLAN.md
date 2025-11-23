# Zoneless Migration Plan for Thousand-Knots App

## Overview
This document outlines the plan to migrate the Angular application from Zone.js-based change detection to zoneless change detection. Angular 21.0.0 supports zoneless applications natively.

## Current State Analysis

### ✅ Already Compatible
- **Angular Version**: 21.0.0 (supports zoneless)
- **Standalone Components**: All components are standalone
- **Signals**: Already using signals in some places (`catalogSignal` in Catalog service, `title` signal in App component)
- **Output API**: Using modern `output()` API in `ShovableBtn` component
- **Input API**: Using modern `input()` API in `PrimaryButton` component

### ⚠️ Needs Updates
1. **App Configuration**: Currently using `provideZoneChangeDetection()`
2. **Zone.js Dependency**: Listed in `package.json` and `angular.json` polyfills
3. **Component State**: Some components use plain properties that need to be signals:
   - `Header.showSearch` (boolean)
   - `CatalogCard.bookmarkIcon` (string)
4. **Test Files**: All test files use `fixture.detectChanges()` which needs updating for zoneless

## Migration Steps

### Phase 1: Update App Configuration
**File**: `src/app/app.config.ts`
- Remove `provideZoneChangeDetection()` provider
- Angular will automatically use zoneless change detection when zone.js is not present

### Phase 2: Remove Zone.js
**Files**: 
- `package.json` - Remove `zone.js` from dependencies
- `angular.json` - Remove `zone.js` from polyfills (build and test configurations)

### Phase 3: Convert Component State to Signals
**Components to Update**:

1. **Header Component** (`src/app/components/header/header.ts`)
   - Convert `showSearch: boolean` to `showSearch = signal(false)`
   - Update template bindings: `@if (!showSearch())` and `@if (showSearch())`
   - Update handlers: `this.showSearch.set(true)` and `this.showSearch.set(false)`

2. **CatalogCard Component** (`src/app/components/catalog-card/catalog-card.ts`)
   - Convert `bookmarkIcon: string` to `bookmarkIcon = signal('bookmark_border')`
   - Update template binding: `{{ bookmarkIcon() }}`
   - Update handler: Use `this.bookmarkIcon.set(...)`

### Phase 4: Verify Event Handling
- All event handlers are already using template event bindings `(click)`, `(btnClick)`, etc.
- These will continue to work in zoneless mode as Angular automatically triggers change detection for DOM events

### Phase 5: Update Tests
**All `.spec.ts` files**:
- Remove `fixture.detectChanges()` calls (not needed in zoneless)
- Or replace with explicit change detection if needed: `fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges()`
- Update test setup to not include zone.js polyfills

**Test Configuration** (`angular.json`):
- Remove `zone.js` and `zone.js/testing` from test polyfills

### Phase 6: Verify Async Operations
- Check for any `setTimeout`, `setInterval`, or Promise chains
- If found, ensure they use Angular's `effect()`, `computed()`, or explicitly trigger change detection
- Currently, no async operations detected in components (good!)

### Phase 7: Forms (if applicable)
- Angular Forms work with zoneless, but ensure reactive forms use proper signal-based patterns if needed
- Currently using `@angular/forms` but no forms detected in components yet

## Detailed File Changes

### 1. `src/app/app.config.ts`
```typescript
// BEFORE
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

// AFTER
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
```

### 2. `package.json`
```json
// Remove from dependencies:
"zone.js": "~0.15.0"
```

### 3. `angular.json`
```json
// Remove from build.polyfills:
"polyfills": []  // or remove the polyfills array entirely

// Remove from test.polyfills:
"polyfills": []  // remove zone.js and zone.js/testing
```

### 4. `src/app/components/header/header.ts`
```typescript
// BEFORE
export class Header {
  showSearch = false;
  clickHandler() {
    this.showSearch = true;
  }
  closeHandler() {
    this.showSearch = false;
  }
}

// AFTER
import { Component, signal } from '@angular/core';

export class Header {
  showSearch = signal(false);
  
  clickHandler() {
    this.showSearch.set(true);
  }
  
  closeHandler() {
    this.showSearch.set(false);
  }
}

// Template changes:
// @if (!showSearch) → @if (!showSearch())
// @if (showSearch) → @if (showSearch())
```

### 5. `src/app/components/catalog-card/catalog-card.ts`
```typescript
// BEFORE
export class CatalogCard {
  bookmarkIcon = 'bookmark_border';
  markHandler() {
    this.bookmarkIcon = this.bookmarkIcon === 'bookmark_border' ? 'bookmark' : 'bookmark_border';
  }
}

// AFTER
import { Component, inject, Input, signal } from '@angular/core';

export class CatalogCard {
  bookmarkIcon = signal('bookmark_border');
  
  markHandler() {
    this.bookmarkIcon.set(
      this.bookmarkIcon() === 'bookmark_border' ? 'bookmark' : 'bookmark_border'
    );
  }
}

// Template change:
// {{ bookmarkIcon }} → {{ bookmarkIcon() }}
```

### 6. Test Files Pattern
```typescript
// BEFORE
fixture.detectChanges();

// AFTER (if explicit change detection needed)
// Option 1: Remove entirely (preferred for zoneless)
// Option 2: Use explicit change detection
import { ChangeDetectorRef } from '@angular/core';
const cdr = fixture.componentRef.injector.get(ChangeDetectorRef);
cdr.detectChanges();
```

## Benefits of Zoneless
1. **Smaller Bundle Size**: Removes ~50KB+ from bundle
2. **Better Performance**: No zone.js overhead, faster change detection
3. **More Predictable**: Explicit change detection, easier to reason about
4. **Future-Proof**: Angular's direction is moving toward zoneless

## Testing Checklist
After migration, verify:
- [ ] App boots without errors
- [ ] Header search toggle works
- [ ] Catalog card bookmark toggle works
- [ ] Navigation works
- [ ] All buttons and interactions work
- [ ] Forms work (if any are added)
- [ ] All tests pass
- [ ] No console errors related to zone.js

## Rollback Plan
If issues arise:
1. Re-add `provideZoneChangeDetection()` to `app.config.ts`
2. Re-add `zone.js` to `package.json` dependencies
3. Re-add `zone.js` to `angular.json` polyfills
4. Revert component signal changes if needed

## Notes
- Angular 21 automatically handles DOM events, XHR, and other async operations in zoneless mode
- Signals are the recommended way to manage state in zoneless Angular
- The migration is relatively straightforward for this app since it already uses modern Angular patterns

