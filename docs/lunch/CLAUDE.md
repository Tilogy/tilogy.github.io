# Lunch Code App - Project Documentation

## Overview

A PWA (Progressive Web App) for entering a secure lunch code with themed interfaces. The app is designed for young children to enter a code to access lunch services, with fun visual themes and audio feedback.

## Features

### Dynamic Themes

- **Girl Theme (theme=1)**: Pink/unicorn theme with pastel colors and magical decorations
- **Boy Theme (theme=2)**: Blue/truck theme with vehicle and tool decorations
- Theme is controlled via URL query parameter: `?theme=1` or `?theme=2`
- Default theme is Girl (pink/unicorn) if no parameter specified

### Dynamic Code Length

- Supports codes from 1 to 7 digits
- Code is set via URL query parameter: `?code=XXXXX`
- Default code is `1111` if no parameter specified
- Code validation ensures only numeric codes are accepted

### Audio Feedback

- Each digit button plays a corresponding audio file (zero.mp3, one.mp3, etc.)
- Success sound plays when correct code is entered (win.mp3)
- Audio files are located in the `audio/` subdirectory
- Tone feedback for delete and clear actions

### Visual Feedback

- Digit boxes show green when correct digit is entered
- Digit boxes show red when incorrect digit is entered
- Fireworks animation on successful code entry
- Theme-appropriate emojis in animations (unicorns for girl, trucks for boy)

### Responsive Design

- Fully responsive layout using viewport units (vh, vw)
- Adapts to different screen sizes and orientations
- Maximum height of 700px to fit most screens
- Special handling for landscape orientation

## File Structure

```
lunch/
├── index.html          # Main application file
├── manifest.json       # PWA manifest configuration
├── sw.js              # Service worker for offline functionality
├── icon-40.png        # App icon (40x40)
├── CLAUDE.md          # This documentation file
└── audio/             # Audio files directory
    ├── zero.mp3
    ├── one.mp3
    ├── two.mp3
    ├── three.mp3
    ├── four.mp3
    ├── five.mp3
    ├── six.mp3
    ├── seven.mp3
    ├── eight.mp3
    ├── nine.mp3
    └── win.mp3
```

## URL Parameters

### Examples

- `/lunch/` - Default (girl theme, code 1111)
- `/lunch/?theme=1` - Girl theme with default code
- `/lunch/?theme=2` - Boy theme with default code
- `/lunch/?code=123` - Default theme with 3-digit code
- `/lunch/?theme=2&code=9999` - Boy theme with 4-digit code
- `/lunch/?theme=1&code=1234567` - Girl theme with 7-digit code

## PWA Configuration

### Manifest Settings

- Name: "Lunch Code"
- Background color: #ffc0cb (pink)
- Theme color: #ffc0cb (dynamically updated based on theme)
- Display: standalone
- Orientation: portrait-primary
- Scope: /lunch/

### Service Worker

- Implements offline functionality
- Caches all essential files for offline use
- Cache-first strategy for performance

## Development Guidelines

### IMPORTANT: Cache Version Management

**After ANY change to index.html, manifest.json, or sw.js, you MUST update the CACHE_NAME version in sw.js**

Current pattern: `const CACHE_NAME = 'lunch-code-vX';` where X is the version number.

This ensures:

- Service worker updates properly
- Users get the latest version
- Cache is refreshed with new content

### Making Changes

1. **Before making changes**: Note the current cache version in sw.js
2. **Make your changes**: Edit the necessary files
3. **Update cache version**: Increment the version number in sw.js
4. **Test**: Ensure service worker updates and changes are reflected

### CSS Architecture

- Uses CSS custom properties for theme colors
- Viewport units (vh, vw) for responsive sizing
- Flexbox and CSS Grid for layout
- Theme-specific classes (.theme-girl, .theme-boy)

### JavaScript Features

- URL parameter parsing for theme and code
- Dynamic DOM manipulation for digit boxes
- Audio playback with Web Audio API fallback
- Touch-optimized event handling
- Service worker registration

## Browser Compatibility

- Modern browsers with ES6 support
- iOS Safari (with PWA limitations)
- Chrome/Edge/Firefox on desktop and mobile
- Requires HTTPS for service worker functionality

## Security Considerations

- Code validation limited to numeric input
- Maximum 7 digits to prevent overflow
- No server-side storage of codes
- All validation happens client-side
- Codes are passed via URL parameters (consider implications)

## Performance Optimizations

- Service worker caching for offline use
- Preloaded audio files
- CSS animations use GPU acceleration
- Minimal JavaScript for fast interaction
- Responsive images (single icon size)

## Accessibility Notes

- Large touch targets for young users
- High contrast colors for visibility
- Audio feedback for actions
- Visual feedback for all interactions
- Simple, clear interface design

## Future Enhancements (Potential)

- Multiple language support
- Admin panel for code management
- Usage analytics
- More themes
- Biometric authentication option
- Server-side validation
- Code expiration/rotation

## Testing Checklist

- [ ] Theme switching works correctly
- [ ] All digit codes (1-7 digits) work
- [ ] Audio plays for all digits
- [ ] Win animation triggers on correct code
- [ ] Service worker updates with cache version change
- [ ] Offline functionality works
- [ ] Responsive on all screen sizes
- [ ] PWA installs correctly
- [ ] Icons display properly

## Known Issues

- iOS may not autoplay audio without user interaction
- PWA installation varies by platform
- Landscape mode on small devices may crop content

## Deployment Notes

- Must be served over HTTPS for PWA features
- Ensure audio files are properly uploaded
- Check CORS settings if audio hosted separately
- Verify manifest.json is served with correct MIME type
- Test service worker registration in production
