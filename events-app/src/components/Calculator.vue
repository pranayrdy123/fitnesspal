<template>
  <div class="calci">
    <form @submit.prevent="calculate()">
      <div class="calci-1">
        <h4>
          BMI - {{ bmi }} kg/m<sup>2</sup>
          <br>
          <span
            :class="className"
            v-if="message"
          >
            {{ message }}
          </span>
          <span
            class="gray"
            v-else
          >
            Enter your height and weight
          </span>
        </h4>
      </div>

      <div class="calci-3">
        <div class="calci-4">
          <input
            class="calci-5"
            autocomplete="off"
            type="text"
            pattern="-?[0-9]*(\.[0-9]+)?"
            id="height"
            v-model="height"
            @input="calculate()"
          >
          <label
            class="calci-6"
            for="height"
          >Height (cm)</label>
          
        </div>
        <br>
        <div class="calci-7">
          <input
            class="calci-8"
            autocomplete="off"
            type="text"
            pattern="-?[0-9]*(\.[0-9]+)?"
            id="weight"
            v-model="weight"
            @input="calculate()"
          >
          <label
            class="calci-9"
            for="weight"
          >Weight (kg)</label>
         
        </div>
        <br>
        <a
          href="#"
          class="button is-link"
          @click.prevent="reset()"
        >
          Reset
        </a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      height: '',
      weight: '',
      bmi: '',
      message: '',
      className: 'red',
    };
  },
  methods: {
    isNumeric(input) {
      return !isNaN(parseFloat(input)) && isFinite(input);
    },
    isValid(input) {
      if (input !== '' && this.isNumeric(input)) {
        if (input > 3) {
          return true;
        }
      }
      return false;
    },
    calculate() {
      if (this.isValid(this.height) && this.isValid(this.weight)) {
        this.bmi = (this.weight / ((this.height / 100) * (this.height / 100))).toFixed(2);

        this.createMessage(this.bmi);
      }
    },
    createMessage(number) {
      if (number > 59.99) {
        this.message = 'Obese Class VI (Hyper Obese)';
        this.className = 'red';
      } else if (number > 49.99) {
        this.message = 'Obese Class V (Super Obese)';
        this.className = 'red';
      } else if (number > 44.99) {
        this.message = 'Obese Class IV (Morbidly Obese)';
        this.className = 'red';
      } else if (number > 39.99) {
        this.message = 'Obese Class III (Very severely obese)';
        this.className = 'red';
      } else if (number > 34.99) {
        this.message = 'Obese Class II (Severely obese)';
        this.className = 'red';
      } else if (number > 29.99) {
        this.message = 'Obese Class I (Moderately obese)';
        this.className = 'red';
      } else if (number > 24.99) {
        this.message = 'Overweight';
        this.className = 'red';
      } else if (number > 18.49) {
        this.message = 'Normal (healthy weight)';
        this.className = 'green';
      } else if (number > 15.99) {
        this.message = 'Underweight';
        this.className = 'red';
      } else if (number > 14.99) {
        this.message = 'Severely underweight';
        this.className = 'red';
      } else {
        this.message = 'Very severely underweight';
        this.className = 'red';
      }
    },
    reset() {
      this.height = '';
      this.weight = '';
      this.bmi = '';
      this.message = '';
    },
  },
};
</script>

<style>
.calci{
  padding-left: 300px;

}

.mdl-card__title h4 span {
  font-size: 16px;
}
.gray {
  color: #999;
}
.red {
  color: #ff4081;
}
.green {
  color: green;
}
</style>
