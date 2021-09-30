sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("zw.co.appsareus.fioricalculator.controller.Home", {
    onInit: function () {
      this.inputRef = this.byId("numberInput");
      this.memory = 0;
    },

    onAdd: function () {
      this.operation = "add";
      this.memory = this.inputRef.getValue();
      this.inputRef.setValue("0");
    },
    onMinus: function () {
      this.operation = "minus";
      this.memory = this.inputRef.getValue();
      this.inputRef.setValue("0");
    },
    onMultiply: function () {
      this.operation = "multiply";
      this.memory = this.inputRef.getValue();
      this.inputRef.setValue("0");
    },
    onDivide: function () {
      this.operation = "divide";
      this.memory = this.inputRef.getValue();
      this.inputRef.setValue("0");
    },

    onInput: function (event, number) {
      this.inputRef.setValue(this.inputRef.getValue() + number);
    },
    onClear: function () {
      this.operation = "";
      this.memory = 0;
      this.inputRef.setValue("0");
    },

    onEquals: function () {
      let ans = "";
      switch (this.operation) {
        case "add":
          ans = parseFloat(this.memory) + parseFloat(this.inputRef.getValue());
          this.inputRef.setValue(ans);
          this.memory = 0;
          break;
        case "minus":
          ans = parseFloat(this.memory) - parseFloat(this.inputRef.getValue());
          this.inputRef.setValue(ans);
          this.memory = 0;
          break;
        case "multiply":
          ans = parseFloat(this.memory) * parseFloat(this.inputRef.getValue());
          this.inputRef.setValue(ans);
          this.memory = 0;
          break;
        case "divide":
          ans = parseFloat(this.memory) / parseFloat(this.inputRef.getValue());
          this.inputRef.setValue(ans);
          this.memory = 0;
          break;
      }
    },
  });
});
