// Module Federation allows different applications (microfrontends)
// to share modules at runtime. To achieve this, Webpack dynamically
// loads these shared modules. This ensures that the application only
// starts after all federated modules are properly initialized.
// @ts-ignore
import('./bootstrap')
