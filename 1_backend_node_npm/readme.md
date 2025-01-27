Download Node. With node npm will be installed automatically as a package
npm is a node package manager.

npm init: this command will initialize a node project and will ask few questions related to the project.
npm init -y: it also does the same thing but escapes the questions.

After npm init, a package.json file will be made automatically, which will contain info about your project. It also has info about the dependencies of your project.

Using npm we can install another packages, eg: npm install slugify or npm i slugify

When we install another packages using npm, a new folder is created name node_modules which contains those package and further dependencies of those install packages.
Packages are the code that are written by others and that we are using in our project. 
In big projects, node_modules folder becomes very big. We can delete the node_modules folder anytime to save our space and when we need it we can download it by npm i or npm install.


<!-- In professional way -->
(When you run npm init in your project directory, npm will prompt you to enter various details about your project, such as the package name, version, description, entry point, test command, repository URL, license, etc. You can either provide these details interactively or pass them as arguments directly to the command.

Once you've provided the necessary information, npm will generate a package.json file in your project directory based on the input you provided. This package.json file serves as a manifest for your Node.js project, containing metadata about the project as well as a list of dependencies and other configuration settings.

node_modules: This directory is where npm installs project dependencies. When you install packages using npm install, they are saved in the node_modules directory along with their own dependencies. This directory is typically excluded from version control and can be regenerated using npm install based on the dependencies listed in package.json.

package-lock.json: This file is automatically generated by npm to lock down the versions of dependencies installed in your project. It ensures that the same versions of dependencies are installed on all machines and during subsequent installations. This file is intended to be committed to version control to ensure reproducible builds.)