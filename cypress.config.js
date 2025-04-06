const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
module.exports = defineConfig({
e2e: {
  setupNodeEvents(on, config) {
  // Configura el preprocesador del bundle y el plugin Cucumber.
    on(
    'file:preprocessor',
    createBundler({
    plugins: [createEsbuildPlugin(config)],
    })
  );
  // Añade el preprocesador de Cucumber.
  addCucumberPreprocessorPlugin(on, config);
  // Asegúrate de devolver el objeto de configuración.
  return config;
  },
  specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/basic-tests/*.js']
  /*
  Para encontrar los archivos de tests, si queremos que también encuentre
  archivos .js
  añade la ruta con la extensión separada con una , todo dentro de []
  */
 
  },
  //numTestsKeptInMemory: 10, // Número de tests que se mantienen en memoria.
  //defaultCommandTimeout: 10000 // Tiempo de espera por defecto.
  experimentalStudio: true, // Habilita la función experimental Studio.
  failOnStatusCode: false, // No fallar si el código de estado es 4xx o 5xx.
  env:{
    snapshotOnly: true, // Solo toma una captura de pantalla
    requestMode: true, // Modo de solicitud
  }
});