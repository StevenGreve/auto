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
