# Auto (Design Document)

## Table of Contents

- [API](#api)
- [Use Cases](#use-cases)

### API

```js
const auto = new Auto(model);

auto.autoKey = String;
auto.confirmKey = String;
auto.history = String[];
auto.start = Function<Void>;
auto.marker = String;
auto.setTheme = Function<Void>;

const model = [
    {
        request: {
            help: String | Function<String>,
            default: String | Function<String>,
            placeholder: String | Function<String>,
            args: Boolean,
            interactive: Boolean,
            choices: String[] | Function<String[]>,
            mask: Boolean,
            condition: Function<Boolean>,
            autocomplete: [
                {
                    suggestions: String[] | Function<String[]>,
                    constraint: String | Function<String>,
                    strategy: Function<Boolean>
                }
            ],
            plugin: Plugin<T>
        },
        response: {
            echo: String | Function <String>,
            statusCode: Number | Function<Number>,
            reprompt: Function<Boolean>,
            goTo: Number | Function<Number>
        }
    }
];
```

### Use Cases

1. Interactive Workflow

```
Enter your project name:
> my-app

Select a template:
[1] React-TS
[2] Angular
> 2

Add routing capabilities? (Yes/No)
> Yes
```

2. Input with No Response (Exemplary Use Case: Parsing CLI Arguments)  

```
> Taskman Add -Task "Buy groceries" -Priority High -Due "20-11-2024" -Verbose
```

3. Input With Response (Exemplary Use Case: Parsing CLI Arguments)

```
> --Help
Usage: Taskman Add --Task TASK [--Priority {Low,Medium,High}] [--Due Date] [--Verbose]

Add a new task to the task manager.

Optional arguments:
  -H, --Help            Show this help message and exit.
  --Task TASK           The description of the task to add. (Required)
  --Priority {Low,Medium,High}
                        The priority level of the task. Default is "Medium".
  --Due DATE            The due date for the task in the format DD-MM-YYYY.
  --Verbose             Enable verbose output for detailed information.
```

4. Error-Handling and Reprompting

```
Enter a valid email:
> user@.example.co
Invalid email. Try again.

Enter a valid email:
> user@example.com
```

5. Non-interactive Inputs

In this mode, the program runs entirely with predefined arguments, and the user cannot interact with any prompts during execution.

```
$ TaskRunner --Input Data.csv --Output Summary.pdf
```

6. Minimalist Mode

In minimalist mode, there is no validation, no feedback, and no confirmation—just a sequence of prompts, one after the other, for the user to provide inputs.

7. Arrow Menu

When using the arrow menu, the user can navigate through a list of options using the arrow keys. By default, the arrow keys are used to move through the command history, but in this case, they allow you to move up and down a list of options. This feature will be available through the plugin system.

```
? Select a framework: » - Use arrow-keys. Return to submit.
    Vanilla
    Vue
    React
    Preact
    Lit
    Svelte
>   Solid
    Qwik
    Angular
    Others
```

8. Multi-Select Arrow Menu

The multi-select arrow menu extends the functionality of the standard arrow menu by allowing users to select multiple options from a list. Users can navigate through the list using the arrow keys and toggle selections with the space bar. Like the arrow menu, it will be available through the plugin system.

```
? Select frameworks: » - Use space to select. Return to submit.  
[X] React  
[ ] Vue  
[ ] Svelte  
[X] Angular  
```

8. Masked Inputs

Useful for scenarios where sensitive input (e.g., passwords, API keys) needs to be entered securely.

```
Enter your password:
> ********
```

9. Conditional Prompts

Prompts that dynamically appear based on the selection in a previous prompt.

```
Do you want to enable notifications? (Yes/No)  
> Yes  

Enter your email for notifications:  
> user@example.com  
```

10. Miscellaneous

By leveraging libraries like `terminal-kit` and others, `auto` will be able to render advanced elements such as tables, images, and progress indicators, as well as offer a wide variety of colors and animations.
