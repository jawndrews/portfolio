# 3D Character Model Component Implementation Guide

This guide explains how to integrate the interactive 3D character model into your React portfolio site.

## Files Overview

1. `CharacterModel.js` - The core Three.js component that creates and animates the 3D character
2. `CharacterModelContainer.js` - A wrapper component that handles responsive sizing and optional caption

## Dependencies

Make sure you have the following dependencies installed:

```bash
npm install three
```

Your project already has React, styled-components, and framer-motion based on your existing code.

## Integration Options

You can integrate the 3D character model in different ways:

### Option 1: Add to Home Page (Recommended)

This places the character model alongside your introduction text for an engaging first impression.

1. Copy both component files to your components directory
2. Import and use the component in your Home page as shown in the example

### Option 2: Add to About Page

This adds the character model to your About page as a visual representation of yourself.

1. Copy both component files to your components directory
2. Import and use the component in your About page as shown in the example

## Implementation Steps

1. Copy `CharacterModel.js` and `CharacterModelContainer.js` to your project's components directory
2. Choose where to integrate the component (Home or About page)
3. Import the component: `import CharacterModelContainer from "../components/CharacterModelContainer";`
4. Add the component to your JSX: `<CharacterModelContainer showCaption={true} />`

## Component Props

The `CharacterModelContainer` component accepts the following props:

- `showCaption` (boolean, optional): Shows an instructional caption below the model. Default: false

## Features

- **Interactive Head Movement**: The character's head follows cursor movements
- **Mobile Support**: Uses touch events on mobile devices
- **Responsive Design**: Automatically adjusts size based on screen width
- **Low-Poly Style**: PlayStation-inspired low-poly aesthetic as requested
- **Customized Appearance**: Blonde hair, mustache, black t-shirt, blue pants, white sneakers

## Customization

If you want to modify the character's appearance:

1. Open `CharacterModel.js`
2. Find the materials section to change colors
3. Modify the geometry creation sections to change shapes or proportions

## Troubleshooting

- If the model doesn't appear, check browser console for errors
- Ensure Three.js is properly installed
- Verify that the container has proper dimensions
- For performance issues on mobile, consider reducing the complexity of the model

## Performance Considerations

The component is optimized for performance, but if you experience issues:
- Remove the animation loop when the component is not visible
- Reduce polygon count for lower-end devices
- Consider adding a loading state for slower connections
