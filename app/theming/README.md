# Raiqa Health Theming System

This theming system allows for easy management of design tokens and provides components styled according to these tokens.

## Directory Structure

- `/theming/themes/` - Contains the source JSON theme files (design tokens)
- `/theming/themes/generated/` - Contains the processed theme files used by components
- `/components/typography/` - Typography components (Header1, Header2, Body1, etc.)
- `/components/buttons/` - Button components (PrimaryButton, SecondaryButton)
- `/components/layout/` - Layout components (Card, etc.)

## How It Works

1. Design tokens are stored as JSON files in `/theming/themes/`
2. The `convertThemes.js` script processes these tokens into usable theme files
3. Components use the `ThemeProvider` context to access the current theme
4. Dark/light mode can be toggled with the `ThemeToggle` component

## Updating Themes

When you update the design tokens in the JSON files, simply run:

```bash
yarn update-themes
```

This will regenerate the theme files in the `generated` directory, and your components will automatically use the new styles.

## Using Components

### Typography

```tsx
import { Header1, Body1 } from '@/app/components/typography';

// In your component
<Header1>This is a heading</Header1>
<Body1>This is a paragraph text</Body1>
```

### Buttons

```tsx
import { PrimaryButton, SecondaryButton } from '@/app/components/buttons';

// In your component
<PrimaryButton onClick={handleClick}>Primary Action</PrimaryButton>
<SecondaryButton size="small">Secondary Action</SecondaryButton>
```

### Layout

```tsx
import { Card } from '@/app/components/layout';

// In your component
<Card elevation={2} padding="large">
  Card content goes here
</Card>
```

### Theme Toggle

```tsx
import { ThemeToggle } from '@/app/components';

// In your component
<ThemeToggle />
```

## Adding New Components

To add new components that use the theming system:

1. Import the `useTheme` hook:

   ```tsx
   import { useTheme } from '@/app/theming/ThemeProvider';
   ```

2. Access the current theme:

   ```tsx
   const { currentTheme } = useTheme();
   ```

3. Use theme values in your styles:

   ```tsx
   const styles = {
     color: currentTheme.palette.primary.main,
     fontSize: currentTheme.typography.body1.fontSize,
   };
   ```

## Extending the System

To add new design tokens:

1. Update the JSON files in `/theming/themes/`
2. Modify the `convertThemes.js` script to process the new tokens
3. Run `yarn update-themes` to regenerate the theme files
