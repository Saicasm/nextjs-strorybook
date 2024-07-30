export default function (plop) {
  // component generator
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{name}}.js",
        templateFile: "plop-templates/controller.hbs",
      },
    ],
  });
}
