---
title: Accessibility Checklist for Forms
date: 2025-09-10
tags: [a11y, forms, react]
summary: Small but important details for making forms accessible.
---

# Accessibility Checklist for Forms

Form accessibility is crucial for creating inclusive web experiences. Here's my checklist of essential practices:

## 1. Proper Labels

Always associate labels with form inputs using `htmlFor`:

```jsx
<label htmlFor="email">Email Address</label>
<input id="email" type="email" name="email" />
```

## 2. Error Messages with aria-live

Use `aria-live` regions to announce errors to screen readers:

```jsx
<div aria-live="polite" className="error-message">
  {error && <span>{error}</span>}
</div>
```

## 3. Required Field Indicators

Mark required fields clearly:

```jsx
<label htmlFor="name">
  Name <span aria-label="required">*</span>
</label>
<input id="name" required aria-required="true" />
```

## 4. Focus Management

Ensure focus outlines are visible:

```css
input:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

## 5. Loading States

Disable submit button and provide feedback during submission:

```jsx
<button 
  type="submit" 
  disabled={isLoading}
  aria-describedby={isLoading ? "loading-message" : undefined}
>
  {isLoading ? 'Sending...' : 'Send Message'}
</button>
{isLoading && (
  <div id="loading-message" aria-live="polite">
    Please wait while we send your message
  </div>
)}
```

## 6. Fieldset for Related Fields

Group related form fields:

```jsx
<fieldset>
  <legend>Contact Information</legend>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
</fieldset>
```

## Quick Checklist

- [ ] All inputs have associated labels
- [ ] Required fields are marked with `aria-required="true"`
- [ ] Error messages use `aria-live="polite"`
- [ ] Focus outlines are visible
- [ ] Submit button shows loading state
- [ ] Related fields are grouped with fieldset/legend

These small details make a huge difference for users with disabilities!
