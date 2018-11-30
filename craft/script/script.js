new Vue({
  el: "#homepage",
  data: {
    showMenu: false,
    showShed: false,
    showPound: false,
    showModal: false,
    workModal: false,
    bagModal: false,
    showFishModal: false,
    showCastle: false,
    width: 0,
    skills: {
      fishing: {
        view: false
      }
    },
    total: 6000,
    prices: {
      shed: 1000,
      pond: 500,
      castle: 5000
    },
    bag: {
      fish: 0
    },
    fishes: {
      alert: "",
      crusian: {
        type: "Карась",
        image: "<img src='images/crusian.png' class='fish_type'>",
        time: 5000,
        level: 1,
        title: "карася",
        description:
          "Карась – рыба достаточно осторожная, поэтому поймать иногда весьма сложно, но многие рыбаки стремятся к ловле именно этой рыбы, совершенствуя уже существующие техники."
      }
    }
  },
  methods: {
    getResourse(type, time) {
      this.workModal = !this.workModal;
      this.fishes.alert = "";

      var timer = setInterval(() => {
        var width = (this.width += 1);
        if (width >= 100) {
          clearInterval(timer);

          this.width = 0;
          this.bag.fish += 1;
          this.fishes.alert = "Удачная рыбалка! Ваша добыча - " + type;
        }
      }, 50);
    }
  }
});
