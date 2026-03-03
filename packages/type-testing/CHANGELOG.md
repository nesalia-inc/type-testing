# @deessejs/type-testing

## 0.3.0

### Minor Changes

- feat: add type utility helpers

  Add new type utilities for compile-time type testing:

  ### Property Modifiers
  - IsReadonly<T> - Check if all properties are readonly
  - IsRequired<T> - Check if all properties are required
  - IsPublic<T, K> - Check if property is public
  - IsPrivate<T, K> - Check if property is private
  - IsProtected<T, K> - Check if property is protected

  ### Deep Type Manipulation
  - DeepReadonly<T> - Make all properties readonly recursively
  - DeepPartial<T> - Make all properties optional recursively
  - RequiredKeys<T> - Get keys of required properties
  - OptionalKeys<T> - Get keys of optional properties

  ### Function Types
  - IsConstructor<T> - Check if type is a constructor
  - IsAbstract<T> - Check if type is abstract

  ### Other
  - IsNeverEqual<T, U> - Check if T and U are both never

## 0.2.0

### Minor Changes

- Add runtime type checking utilities with boolean type guards

## 0.1.2

### Patch Changes

- Fix .npmignore to include dist folder in published package

## 0.1.1

### Patch Changes

- Fix ESLint warnings by removing unused eslint-disable directives

## 0.1.0

### Minor Changes

- Initial release of @deessejs/type-testing - A micro library for compile-time type testing in TypeScript
