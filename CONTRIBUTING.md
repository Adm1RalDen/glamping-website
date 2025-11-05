# Contributing to Hidden Heaven Glamping Website

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Code Quality Standards

### Accessibility
- All interactive elements must have proper ARIA labels
- Forms must have associated labels (use `htmlFor` attribute)
- Images must have descriptive alt text
- Maintain proper heading hierarchy
- Ensure keyboard navigation works properly

### Code Style
- Use functional components with hooks
- Add PropTypes to all components that accept props
- Extract magic numbers to named constants
- Use React.memo for components that don't need frequent re-renders
- Add `loading="lazy"` to images below the fold

### Performance
- Optimize images before committing
- Use lazy loading for images and components
- Minimize bundle size
- Avoid unnecessary re-renders

### Testing
- Write tests for new features
- Ensure all tests pass before submitting PR: `npm test`
- Use role-based queries in tests for better accessibility alignment

## Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Build the project**: `npm run build`
6. **Commit your changes**: Use clear, descriptive commit messages
7. **Push to your fork**: `git push origin feature/your-feature-name`
8. **Submit a Pull Request**

## Code Review Process

All submissions require review. We use GitHub pull requests for this purpose.

### PR Checklist
- [ ] Code follows the project's style guidelines
- [ ] All tests pass
- [ ] Build completes without errors
- [ ] Accessibility standards maintained
- [ ] Documentation updated (if needed)
- [ ] No console errors or warnings

## Questions?

Feel free to open an issue for any questions or concerns.
