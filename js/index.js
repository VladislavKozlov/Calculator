$(window).on('load', function () {
    var screen,
        output,
        screenNew,
        zero,
        operator;

    screen = $("#result");

    $(document).on("click", ".num", function () {
        num = this.value;
        num = screen.html() + num;
        screen.html(num);
        output = screen.html();
    });

    $(document).on("click", "#zero", function () {
        zero = this.value;
        if (screen.html() == "") {
            screen.html(zero);
            output = screen.html();
        }
        else if (screen.html() == output) {
            zero = screen.html() + zero;
            screen.html(zero);
            output = screen.html();
        }
    });

    $(document).on("click", ".period", function () {
        period = this.value;
        if (screen.html() == "") {
            screenNew = screen.html().append("0.");
            screen.html(screenNew);
            output = screen.html();
        }
        else if (screen.html() == output) {
            screenNew = screen.html() + ".";
            screen.html(screenNew);
        }
    });

    $(document).on("click", ".eqn", function () {
        if (screen.html() == output) {
            var evalOutput = eval(output);
            screenNew = screen.html(evalOutput);
        }
        else {
            screenNew = screen.html("");
        }
    });

    $(document).on("click", "#del", function () {
        screen.html("");
    });

    $(document).on("click", ".operator", function () {
        operator = this.value;
        if (screen.html() == "") {
            screenNew = screen.html() + "";
            screen.html(screenNew);
        }
        else if (output) {
            screenNew = output + operator;
            screen.html(screenNew);
        }
    });
});
