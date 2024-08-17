module.exports = function (plop) {
  plop.setGenerator("action-based", {
    description: "Generate files based on selected action",
    prompts: [
      {
        type: "list",
        name: "action",
        message: "What type of action do you want to take?",
        choices: ["component", "service", "pages"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter a name:",
      },
    ],
    actions: function (data) {
      const actions = [];

      switch (data.action) {
        case "component":
          actions.push({
            type: "add",
            path: "src/components/{{properCase name}}/{{properCase name}}.tsx",
            templateFile: "src/plop-templates/component/component.hbs",
          });
          actions.push({
            type: "add",
            path: "src/components/{{properCase name}}/{{properCase name}}.test.tsx",
            templateFile: "src/plop-templates/component/component.test.hbs",
          });
          actions.push({
            type: "add",
            path: "src/stories/{{properCase name}}.stories.ts",
            templateFile: "src/plop-templates/component/component.stories.hbs",
          });
          break;
        case "service":
          actions.push({
            type: "add",
            path: "src/service/{{camelCase name}}/{{camelCase name}}Service.ts",
            templateFile: "src/plop-templates/service/service.hbs",
          });
          // actions.push({
          //   type: 'modify',
          //   path: 'src/utils/types/index.d.ts',
          //   templateFile: 'src/plop-templates/service/service.type.hbs',
          // });
          break;
        case "pages":
          actions.push({
            type: "add",
            path: "src/pages/{{camelCase name}}/index.tsx",
            templateFile: "src/plop-templates/pages.hbs",
          });
          break;
      }

      return actions;
    },
  });
};
