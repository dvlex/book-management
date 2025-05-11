# Angular Template

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10 and is configured to be used inside a development container. For more information about development containers, refer to the [VS Code Dev Containers documentation](https://code.visualstudio.com/docs/devcontainers/containers).

Please note that this project does not use Angular's standalone components feature. Instead, it follows the traditional NgModule-based architecture for organizing components, directives, and services.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for Visual Studio Code
- [Docker](https://www.docker.com/)
- [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/) (if you are using Windows)

## Setting Up the Development Container

Working inside a development container provides a consistent and isolated environment for your project, ensuring that all dependencies and tools are configured correctly. This approach eliminates the "it works on my machine" problem and simplifies collaboration across teams.

To open this project in a development container:

1. Ensure the Docker daemon is running on your system.
2. Open this project in Visual Studio Code.
3. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) to open the Command Palette.
4. Type and select **Reopen in Container**.
5. Once the development container setup process is complete, open a terminal within Visual Studio Code and run the following command to install all project dependencies:

  ```bash
  npm install
  ```

  This ensures that all required packages are installed and the project is ready for development.

Visual Studio Code will create a Docker container instance based on the project's configuration and attach to it. This allows you to work directly inside the containerized environment.

### Advantages of Using a Dev Container

- **Consistency**: All team members work in the same environment, reducing setup issues and configuration drift.
- **Isolation**: Dependencies and tools are encapsulated within the container, avoiding conflicts with your local system.
- **Portability**: The container configuration can be shared, making it easy to onboard new developers or replicate the environment on different machines.
- **Simplified Tooling**: No need to install project-specific tools or dependencies on your local machine; everything is managed within the container.

By leveraging development containers, you can streamline your workflow and focus on building your application without worrying about environment-related issues.

## In this Container

This development container is pre-configured with all the tools and dependencies you need to work with Angular locally. Here's what it includes:

- **Node.js and npm**: For managing packages and running scripts.
- **Angular CLI (`ng`)**: To create, build, and serve Angular applications.
- **Karma**: For running unit tests.
- **Chrome Headless**: For executing tests in a headless browser environment.
- **Required Extensions**: Pre-installed Visual Studio Code extensions tailored for Angular development, such as Angular Language Service and ESLint.

With this setup, you can start developing your Angular application immediately without worrying about installing or configuring additional tools.

## Future Features in This Template

Here are some planned enhancements for this template:

- **Multi-Stage Dockerfile**: Refactor the Dockerfile to include stages for local development, testing, and production builds.
- **CI/CD Testing**: Implement continuous integration and continuous delivery pipelines to automate testing processes.
- **CI/CD Docker Image Deployment**: Configure pipelines to build and push Docker images to a container registry for deployment.
- **Authentication for Artifact Registry/DockerHub**: Add secure authentication mechanisms for pushing images to Artifact Registry or DockerHub.
- **CI/CD for Deployment Using GitHub Actions**: Set up GitHub Actions workflows to automate the deployment process.
- **Add vscode extensions volume in Dockerfile**: Configure the Dockerfile to include a volume for Visual Studio Code extensions. This ensures that extensions installed within the container persist across sessions, improving developer productivity and maintaining a consistent development environment.

These features aim to improve the development workflow, enhance automation, and streamline deployment processes.

## Collaborate and Report Issues

We welcome contributions and feedback to improve this project! Here's how you can get involved:

### Forking the Repository

1. Navigate to the [repository on GitHub](https://github.com/your-repo-link).
2. Click the **Fork** button in the top-right corner to create your own copy of the repository.
3. Clone your forked repository to your local machine:

  ```bash
  git clone https://github.com/your-username/angular-template.git
  cd angular-template
  ```

4. Create a new branch for your changes:

  ```bash
  git checkout -b feature/your-feature-name
  ```

5. Make your changes and commit them:

  ```bash
  git add .
  git commit -m "Add a brief description of your changes"
  ```

6. Push your changes to your forked repository:

  ```bash
  git push origin feature/your-feature-name
  ```

7. Open a pull request from your branch to the main repository.

### Reporting Issues

If you encounter any bugs, have feature requests, or need assistance, please open an issue:

1. Go to the [Issues tab](https://github.com/dvlex/angular-template/issues) in the repository.
2. Click **New Issue**.
3. Provide a clear and descriptive title.
4. Fill out the issue template with details about the problem or suggestion, including steps to reproduce (if applicable).

Your contributions and feedback are greatly appreciated!


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
