/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Textbox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("chaos control", "./Textbox/costumes/chaos control.svg", {
        x: 188.5,
        y: 25.99999852289227,
      }),
      new Costume("blank", "./Textbox/costumes/blank.svg", {
        x: 188.5,
        y: 157.87677352289228,
      }),
      new Costume("A1", "./Textbox/costumes/A1.svg", {
        x: 188.5,
        y: 26.000003522892285,
      }),
      new Costume("S1", "./Textbox/costumes/S1.svg", {
        x: 188.5,
        y: 26.000003522892285,
      }),
      new Costume("S2", "./Textbox/costumes/S2.svg", {
        x: 221.66022499999997,
        y: 26.00000000000003,
      }),
      new Costume("S3", "./Textbox/costumes/S3.svg", {
        x: 193.18100000000004,
        y: 37.702495,
      }),
      new Costume("S4", "./Textbox/costumes/S4.svg", {
        x: 188.5,
        y: 25.99999852289227,
      }),
      new Costume("S5", "./Textbox/costumes/S5.svg", {
        x: 207.61408,
        y: 25.99999852289227,
      }),
      new Costume("A2", "./Textbox/costumes/A2.svg", {
        x: 188.5,
        y: 25.99999852289227,
      }),
      new Costume("S6", "./Textbox/costumes/S6.svg", {
        x: 188.499975,
        y: 34.000003522892285,
      }),
      new Costume("A3", "./Textbox/costumes/A3.svg", {
        x: 211.9049925,
        y: 36.92233000000002,
      }),
      new Costume("S7", "./Textbox/costumes/S7.svg", {
        x: 188.5,
        y: 26.000003522892285,
      }),
      new Costume("S8", "./Textbox/costumes/S8.svg", {
        x: 188.5,
        y: 25.99999852289227,
      }),
      new Costume("S9", "./Textbox/costumes/S9.svg", {
        x: 212.68515950069366,
        y: 26.000003522892285,
      }),
      new Costume("S10", "./Textbox/costumes/S10.svg", {
        x: 206.05374529819704,
        y: 51.74548852289229,
      }),
      new Costume("S11", "./Textbox/costumes/S11.svg", {
        x: 174.06692450069366,
        y: 25.99999852289227,
      }),
      new Costume("A4", "./Textbox/costumes/A4.svg", {
        x: 144.81067961165047,
        y: 25.99999852289227,
      }),
      new Costume("A5", "./Textbox/costumes/A5.svg", {
        x: 232.18932077669882,
        y: 26.000003522892285,
      }),
      new Costume("S12", "./Textbox/costumes/S12.svg", {
        x: 220.486825,
        y: 25.999995000000013,
      }),
      new Costume("S13", "./Textbox/costumes/S13.svg", {
        x: 204.49341307212194,
        y: 38.09258000000003,
      }),
      new Costume("S14", "./Textbox/costumes/S14.svg", {
        x: 220.486815,
        y: 26,
      }),
      new Costume("S15", "./Textbox/costumes/S15.svg", {
        x: 220.48682500000007,
        y: 26,
      }),
      new Costume("A6", "./Textbox/costumes/A6.svg", {
        x: 236.29899009361998,
        y: 39.24227030166443,
      }),
      new Costume("S16", "./Textbox/costumes/S16.svg", {
        x: 220.48682500000007,
        y: 26,
      }),
      new Costume("A7", "./Textbox/costumes/A7.svg", {
        x: 167.34785750000003,
        y: 26,
      }),
      new Costume("A8", "./Textbox/costumes/A8.svg", {
        x: 221.23019975034674,
        y: 37.41575026005549,
      }),
      new Costume("S17", "./Textbox/costumes/S17.svg", {
        x: 220.48682500000007,
        y: 26,
      }),
      new Costume("S18", "./Textbox/costumes/S18.svg", {
        x: 220.48682500000007,
        y: 26,
      }),
      new Costume("S19", "./Textbox/costumes/S19.svg", {
        x: 220.48682500000007,
        y: 26,
      }),
      new Costume("S20", "./Textbox/costumes/S20.svg", {
        x: 220.48682500000007,
        y: 26,
      }),
      new Costume("S21", "./Textbox/costumes/S21.svg", {
        x: 220.48682500000007,
        y: 26,
      }),
      new Costume("S22", "./Textbox/costumes/S22.svg", {
        x: 208.00416203190025,
        y: 38.48266296809979,
      }),
      new Costume("A9", "./Textbox/costumes/A9.svg", {
        x: 67.09647303744796,
        y: 26,
      }),
      new Costume("A10", "./Textbox/costumes/A10.svg", {
        x: 230.0576560887655,
        y: 52.895185,
      }),
      new Costume("S23", "./Textbox/costumes/S23.svg", {
        x: 119.06518838418859,
        y: 26,
      }),
      new Costume("S24", "./Textbox/costumes/S24.svg", {
        x: 204.1033298543689,
        y: 37.312413314840484,
      }),
      new Costume("A11", "./Textbox/costumes/A11.svg", {
        x: 215.41574000000003,
        y: 37.702495,
      }),
      new Costume("A12", "./Textbox/costumes/A12.svg", {
        x: 200.59258,
        y: 24.04957999999999,
      }),
      new Costume("S25", "./Textbox/costumes/S25.svg", {
        x: 116.72468907766986,
        y: 26,
      }),
      new Costume("S26", "./Textbox/costumes/S26.svg", {
        x: 227.11823970180308,
        y: 38.872746185852975,
      }),
      new Costume("A13", "./Textbox/costumes/A13.svg", {
        x: 235.70006959778095,
        y: 24.04957999999999,
      }),
      new Costume("A14", "./Textbox/costumes/A14.svg", {
        x: 196.30166500693463,
        y: 24.04957999999999,
      }),
      new Costume("S27", "./Textbox/costumes/S27.svg", {
        x: 116.72468907766986,
        y: 26,
      }),
      new Costume("A15", "./Textbox/costumes/A15.svg", {
        x: 162.36442505547848,
        y: 24.04957999999999,
      }),
      new Costume("S28", "./Textbox/costumes/S28.svg", {
        x: 116.72468907766986,
        y: 26,
      }),
      new Costume("A16", "./Textbox/costumes/A16.svg", {
        x: 162.36442505547848,
        y: 24.04957999999999,
      }),
      new Costume("A17", "./Textbox/costumes/A17.svg", {
        x: 205.66366084604704,
        y: 37.7024926213592,
      }),
      new Costume("A18", "./Textbox/costumes/A18.svg", {
        x: 158.85367471567258,
        y: 24.04957999999999,
      }),
      new Costume("S29", "./Textbox/costumes/S29.svg", {
        x: 116.72468907766986,
        y: 26,
      }),
      new Costume("S30", "./Textbox/costumes/S30.svg", {
        x: 220.4868259223301,
        y: 37.49339983969841,
      }),
      new Costume("A19", "./Textbox/costumes/A19.svg", {
        x: 76.15603283633854,
        y: 24.04957999999999,
      }),
      new Costume("A20", "./Textbox/costumes/A20.svg", {
        x: 117.8949371359223,
        y: 24.04957999999999,
      }),
      new Costume("S31", "./Textbox/costumes/S31.svg", {
        x: 204.1033298543689,
        y: 37.31242331484049,
      }),
      new Costume("E1", "./Textbox/costumes/E1.svg", {
        x: 176.79750475728167,
        y: 25.26221571818425,
      }),
      new Costume("E2", "./Textbox/costumes/E2.svg", {
        x: 230.62898904993074,
        y: 38.91512762135923,
      }),
      new Costume("E3", "./Textbox/costumes/E3.svg", {
        x: 214.24549485436887,
        y: 38.915130000000005,
      }),
      new Costume("S32", "./Textbox/costumes/S32.svg", {
        x: 160.80409282940366,
        y: 25.609918467406402,
      }),
      new Costume("S33", "./Textbox/costumes/S33.svg", {
        x: 152.61234742718432,
        y: 25.60991999999999,
      }),
      new Costume("S34", "./Textbox/costumes/S34.svg", {
        x: 225.1678235020803,
        y: 37.38722297290704,
      }),
      new Costume("S35", "./Textbox/costumes/S35.svg", {
        x: 195.91158366851585,
        y: 37.387225,
      }),
      new Costume("S36", "./Textbox/costumes/S36.svg", {
        x: 195.911585,
        y: 24.514478814146997,
      }),
      new Costume("E4", "./Textbox/costumes/E4.svg", {
        x: 182.64875436199725,
        y: 38.915130000000005,
      }),
      new Costume("S36.5", "./Textbox/costumes/S36.5.svg", {
        x: 124.52635615117887,
        y: 24.514479999999992,
      }),
      new Costume("E5", "./Textbox/costumes/E5.svg", {
        x: 230.2389075658806,
        y: 38.915130000000005,
      }),
      new Costume("E6", "./Textbox/costumes/E6.svg", {
        x: 233.35957574202496,
        y: 38.915130000000005,
      }),
      new Costume("E7", "./Textbox/costumes/E7.svg", {
        x: 161.58426293342598,
        y: 24.48205094313454,
      }),
      new Costume("E8", "./Textbox/costumes/E8.svg", {
        x: 233.35957574202496,
        y: 38.91512999999998,
      }),
      new Costume("S37", "./Textbox/costumes/S37.svg", {
        x: 134.66851981275994,
        y: 24.514479999999992,
      }),
      new Costume("E9", "./Textbox/costumes/E9.svg", {
        x: 220.09674559639393,
        y: 24.87213416088767,
      }),
      new Costume("S38", "./Textbox/costumes/S38.svg", {
        x: 90.19903317614418,
        y: 24.514479999999992,
      }),
      new Costume("S39", "./Textbox/costumes/S39.svg", {
        x: 201.37275205963908,
        y: 38.99872162638269,
      }),
      new Costume("A21", "./Textbox/costumes/A21.svg", {
        x: 117.8949371359223,
        y: 24.04957999999999,
      }),
      new Costume("SO1", "./Textbox/costumes/SO1.svg", {
        x: 228.28849009015255,
        y: 26,
      }),
      new Costume("SO2", "./Textbox/costumes/SO2.svg", {
        x: 236.09015444521486,
        y: 53.30582524271841,
      }),
      new Costume("S40", "./Textbox/costumes/S40.svg", {
        x: 235.7016993481276,
        y: 52.442254091539525,
      }),
      new Costume("SO3", "./Textbox/costumes/SO3.svg", {
        x: 204.58187249999997,
        y: 26.838867499999992,
      }),
      new Costume("S41", "./Textbox/costumes/S41.svg", {
        x: 159.24159985436904,
        y: 24.340638771368333,
      }),
      new Costume("S42", "./Textbox/costumes/S42.svg", {
        x: 159.24159953189996,
        y: 24.340640000000008,
      }),
    ];

    this.sounds = [new Sound("pop", "./Textbox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "D1" }, this.whenIReceiveD1),
      new Trigger(Trigger.BROADCAST, { name: "D2" }, this.whenIReceiveD2),
      new Trigger(Trigger.BROADCAST, { name: "D3" }, this.whenIReceiveD3),
      new Trigger(Trigger.BROADCAST, { name: "D4" }, this.whenIReceiveD4),
      new Trigger(Trigger.BROADCAST, { name: "D5" }, this.whenIReceiveD5),
      new Trigger(Trigger.BROADCAST, { name: "D6" }, this.whenIReceiveD6),
      new Trigger(Trigger.BROADCAST, { name: "D7" }, this.whenIReceiveD7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 1" },
        this.whenIReceiveLevel1
      ),
      new Trigger(Trigger.BROADCAST, { name: "D8" }, this.whenIReceiveD8),
      new Trigger(Trigger.BROADCAST, { name: "D9" }, this.whenIReceiveD9),
      new Trigger(Trigger.BROADCAST, { name: "D10" }, this.whenIReceiveD10),
      new Trigger(Trigger.BROADCAST, { name: "D11" }, this.whenIReceiveD11),
      new Trigger(
        Trigger.BROADCAST,
        { name: "private message" },
        this.whenIReceivePrivateMessage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(Trigger.BROADCAST, { name: "D12" }, this.whenIReceiveD12),
      new Trigger(Trigger.BROADCAST, { name: "D13" }, this.whenIReceiveD13),
      new Trigger(Trigger.BROADCAST, { name: "D14" }, this.whenIReceiveD14),
      new Trigger(Trigger.BROADCAST, { name: "D15" }, this.whenIReceiveD15),
      new Trigger(Trigger.BROADCAST, { name: "D16" }, this.whenIReceiveD16),
      new Trigger(Trigger.BROADCAST, { name: "D17" }, this.whenIReceiveD17),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(Trigger.BROADCAST, { name: "D18" }, this.whenIReceiveD18),
      new Trigger(Trigger.BROADCAST, { name: "D19" }, this.whenIReceiveD19),
      new Trigger(Trigger.BROADCAST, { name: "D20" }, this.whenIReceiveD20),
      new Trigger(Trigger.BROADCAST, { name: "D21" }, this.whenIReceiveD21),
      new Trigger(
        Trigger.BROADCAST,
        { name: "LEVEL 4" },
        this.whenIReceiveLevel4
      ),
      new Trigger(Trigger.BROADCAST, { name: "D23" }, this.whenIReceiveD23),
      new Trigger(Trigger.BROADCAST, { name: "D24" }, this.whenIReceiveD24),
      new Trigger(Trigger.BROADCAST, { name: "D25" }, this.whenIReceiveD25),
      new Trigger(Trigger.BROADCAST, { name: "D26" }, this.whenIReceiveD26),
      new Trigger(Trigger.BROADCAST, { name: "D27" }, this.whenIReceiveD27),
      new Trigger(Trigger.BROADCAST, { name: "D28" }, this.whenIReceiveD28),
      new Trigger(Trigger.BROADCAST, { name: "D30" }, this.whenIReceiveD30),
      new Trigger(Trigger.BROADCAST, { name: "D31" }, this.whenIReceiveD31),
      new Trigger(Trigger.BROADCAST, { name: "D32" }, this.whenIReceiveD32),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(Trigger.BROADCAST, { name: "E1" }, this.whenIReceiveE1),
      new Trigger(Trigger.BROADCAST, { name: "E2" }, this.whenIReceiveE2),
      new Trigger(Trigger.BROADCAST, { name: "E3" }, this.whenIReceiveE3),
      new Trigger(Trigger.BROADCAST, { name: "E4" }, this.whenIReceiveE4),
      new Trigger(Trigger.BROADCAST, { name: "E5" }, this.whenIReceiveE5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINISHED" },
        this.whenIReceiveFinished
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(2, 126);
    this.costume = "A1";
  }

  *whenIReceiveStart() {
    yield* this.wait(1);
    this.visible = true;
    yield* this.wait(2);
  }

  *whenIReceiveD1() {
    this.costume = "S1";
    yield* this.wait(2);
    this.costume = "S2";
    yield* this.wait(2);
    this.costume = "S3";
    yield* this.wait(2);
    this.costume = "S4";
    yield* this.wait(1);
    this.costume = "S5";
  }

  *whenIReceiveD2() {
    this.costume = "A2";
  }

  *whenIReceiveD3() {
    this.costume = "S6";
  }

  *whenIReceiveD4() {
    this.costume = "A3";
  }

  *whenIReceiveD5() {
    this.costume = "S7";
    yield* this.wait(1);
    this.costume = "S8";
    yield* this.wait(1);
    this.costume = "S9";
    yield* this.wait(1);
    this.costume = "S10";
    yield* this.wait(3);
    this.costume = "S11";
    yield* this.wait(1);
  }

  *whenIReceiveD6() {
    this.costume = "A4";
    yield* this.wait(1);
    this.costume = "A5";
  }

  *whenIReceiveD7() {
    this.costume = "S12";
    yield* this.wait(1);
    this.costume = "S13";
    yield* this.wait(2);
    this.costume = "S14";
  }

  *whenIReceiveLevel1() {
    this.moveAhead();
    this.visible = false;
    this.costume = "S15";
    yield* this.wait(1);
    this.visible = true;
  }

  *whenIReceiveD8() {
    this.costume = "A6";
  }

  *whenIReceiveD9() {
    this.costume = "S16";
  }

  *whenIReceiveD10() {
    this.costume = "A7";
    yield* this.wait(1);
    this.costume = "A8";
  }

  *whenIReceiveD11() {
    this.costume = "S17";
    yield* this.wait(1);
    this.costume = "S18";
    yield* this.wait(2);
    this.costume = "S19";
    yield* this.wait(2);
    this.visible = false;
  }

  *whenIReceivePrivateMessage() {
    this.costume = "chaos control";
    this.visible = true;
  }

  *whenIReceiveLevel2() {
    this.visible = false;
    this.moveAhead();
    yield* this.wait(2);
    this.visible = true;
    this.costume = "S21";
    yield* this.wait(1);
    this.costume = "S22";
  }

  *whenIReceiveD12() {
    this.costume = "A9";
    yield* this.wait(1);
    this.costume = "A10";
  }

  *whenIReceiveD13() {
    this.costume = "S23";
    yield* this.wait(1);
    this.costume = "S24";
  }

  *whenIReceiveD14() {
    this.costume = "A11";
    yield* this.wait(2);
    this.costume = "A12";
  }

  *whenIReceiveD15() {
    this.costume = "S25";
    yield* this.wait(1);
    this.costume = "S26";
  }

  *whenIReceiveD16() {
    this.costume = "A13";
    yield* this.wait(2);
    this.costume = "A14";
  }

  *whenIReceiveD17() {
    this.costume = "S27";
    yield* this.wait(2);
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.visible = false;
    yield* this.wait(2);
    this.visible = true;
    this.costume = "A15";
  }

  *whenIReceiveD18() {
    this.costume = "S28";
    yield* this.wait(1);
    this.broadcast("D19");
  }

  *whenIReceiveD19() {
    this.costume = "A16";
    yield* this.wait(2);
    this.costume = "A17";
    yield* this.wait(2);
    this.costume = "A18";
  }

  *whenIReceiveD20() {
    this.costume = "S29";
    yield* this.wait(1);
    this.costume = "S30";
    yield* this.wait(3);
    this.broadcast("D21");
  }

  *whenIReceiveD21() {
    this.costume = "A19";
    yield* this.wait(1);
    this.costume = "A20";
    yield* this.wait(2);
    this.visible = false;
    this.broadcast("D22");
  }

  *whenIReceiveLevel4() {
    this.visible = false;
    yield* this.wait(2);
    this.visible = true;
    this.costume = "S31";
    yield* this.wait(4);
    this.broadcast("D23");
  }

  *whenIReceiveD23() {
    this.costume = "E1";
    yield* this.wait(2);
    this.costume = "E2";
    yield* this.wait(3);
    this.costume = "E3";
    yield* this.wait(3);
    this.broadcast("D24");
  }

  *whenIReceiveD24() {
    this.costume = "S32";
    yield* this.wait(2);
    this.costume = "S33";
    yield* this.wait(2);
    this.costume = "S34";
    yield* this.wait(3);
    this.costume = "S35";
    yield* this.wait(2);
    this.costume = "S36";
    yield* this.wait(2);
    this.broadcast("D25");
  }

  *whenIReceiveD25() {
    this.costume = "E4";
    yield* this.wait(3);
    this.broadcast("D26");
  }

  *whenIReceiveD26() {
    this.costume = "S36.5";
    yield* this.wait(2);
    this.broadcast("D27");
  }

  *whenIReceiveD27() {
    this.costume = "E5";
    yield* this.wait(2);
    this.costume = "E6";
    yield* this.wait(3);
    this.costume = "E7";
    yield* this.wait(2);
    this.costume = "E8";
    yield* this.wait(3);
    this.broadcast("D28");
  }

  *whenIReceiveD28() {
    this.costume = "S37";
    yield* this.wait(2);
    this.broadcast("D30");
  }

  *whenIReceiveD30() {
    this.costume = "E9";
    yield* this.wait(2);
    this.broadcast("D31");
  }

  *whenIReceiveD31() {
    this.costume = "S38";
    yield* this.wait(1);
    this.costume = "S39";
    yield* this.wait(2);
    this.broadcast("D32");
  }

  *whenIReceiveD32() {
    this.visible = false;
  }

  *whenIReceiveEnd() {
    this.visible = false;
  }

  *whenIReceiveE1() {
    this.visible = true;
    this.costume = "A21";
    yield* this.wait(2);
    this.broadcast("E2");
  }

  *whenIReceiveE2() {
    this.costume = "SO1";
    yield* this.wait(2);
    this.costume = "SO2";
    yield* this.wait(4);
    this.broadcast("E3");
  }

  *whenIReceiveE3() {
    this.costume = "S40";
    yield* this.wait(4);
    this.broadcast("E4");
  }

  *whenIReceiveE4() {
    this.costume = "SO3";
    yield* this.wait(3);
    this.broadcast("E5");
  }

  *whenIReceiveE5() {
    this.costume = "S41";
    yield* this.wait(2);
    this.costume = "S42";
    yield* this.wait(2);
    this.broadcast("FINISHED");
  }

  *whenIReceiveFinished() {
    this.visible = false;
  }
}
