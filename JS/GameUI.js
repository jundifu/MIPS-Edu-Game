/**
 *
 *
 * @class GameUI
 * @extends {GameScene}
 * 
 * this is chapter 1
 */
class GameUI extends GameScene {
    constructor() {
        super();
        this.cpu = undefined


    }

    init() {
        console.log("init GaneUI Menu");
        this.addComponent(new CodePanel(), -1);

        //Instruction Menu Button 
        var InstructionMenuButton = Button.getButton('Instruction_Menu', 375, 30, 1, 3, 'IM');
        InstructionMenuButton.addClickEvent(new NewSceneEvent(new InstructionMenu()));

        this.addComponent(InstructionMenuButton, -1);

        //run button
        this.addComponent(Button.getButton('Code_Run', 375, 60, 1, 3, 'Run'), -1);
        var m = new Memory("Memory", [], 5, 5, 50, 200, false);
        m.add(0);
        this.addComponent(m, -1);

        var r = new Register("Register", [], 100, 270, 250, 50, true);
        r.addAllRegisterCell();
        this.addComponent(r, -1);

        this.addLayer();
        var cpu = new CPU();
      
        this.addComponent(cpu, -1);
        cpu.moveTo(50,50);
        alert('arrived');


        



    }
}