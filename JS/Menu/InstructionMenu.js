
/**
 * This class create Instrucion Menu whcih should contain all Instructions that we will 
 * teach people. When people press these instructions long enough, it supposes to give
 * them the hint that what the instruction is and how to use them.
 *
 * @class InstructionMenu
 * @extends {GameScene}
 */
class InstructionMenu extends GameScene{
    
    /**
     *Creates an instance of InstructionMenu.
     * @memberof InstructionMenu
     */
    constructor() {
        super();
        this.init();
    }

    /**
     * This function initialized Instruction Menu. All components of instruction menu should
     * me delceared, and added to, here. 
     *
     * @memberof InstructionMenu
     */
    init(){
        console.log("Instruction Menu Initialized");
        var addInstruction = Button.getButton('Add_Ins',50,30,1,3,'Add');
        var AddHint= new HintEvent('IMHint');
        var AddHint2 = new HintEvent('IMhint');
        var check = Button.getButton('check',50,70, 1 ,3,'check');
        AddHint.setHintContent('Adds two registers and stores the result in a register \nadd $d, $s, $t');
        AddHint2.setHintContent('check registers status');
        addInstruction.addLongPressEvent(AddHint);
        addInstruction.addClickEvent(AddHint);
        check.addLongPressEvent(AddHint2);
        check.addClickEvent(AddHint2);
        this.addComponent(addInstruction,-1);
        this.addComponent(check,-1);
    }
}
