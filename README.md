# nitro workflow failing example

## 1. Install dependencies

```bash
pnpm install
```

## 2. Run the development server

```bash
pnpm dev
```

## 3. Visit http://localhost:3000

```
Error: Unknown file extension ".ts" for /code/nitro-workflow-sample/lib/helpers.ts

TypeError {▼
  name: 'TypeError',
  message: 'Unknown file extension ".ts" for
  /code/nitro-workflow-sample/lib/helpers.ts',
  stack: 'Unknown file extension ".ts" for /code/nitro-workflow-sample/lib/helpers.ts\n' +
  '    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:219:9)\n' +
  '    at defaultGetFormat (node:internal/modules/esm/get_format:245:36)\n' +
  '    at defaultLoad (node:internal/modules/esm/load:120:22)\n' +
  '    at async ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:580:32)',
  code: 'ERR_UNKNOWN_FILE_EXTENSION',
  unhandled: false,
  [Symbol(Symbol.toStringTag)]: 'Error',
}
```

## 4. Works in correct when deployed to Vercel

Visit: https://nitro-workflow-sample.vercel.app/api/trigger-test
