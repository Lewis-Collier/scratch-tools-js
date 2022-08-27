class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'scratchtools', // change this if you make an actual extension!
      name: 'Scratch Tools',
      blocks: [
        {
          opcode: 'isexact',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is exactly [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue:''
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue:''
            }
          }
        },
        {
          opcode: 'isnot',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is not [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue:''
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue:''
            }
          }
        }
        ]
    };
  }
  isexactly(args) {
    return args.ONE === args.TWO;
  }
  isnot(args) {
       return args.ONE != args.TWO;
  }
  
}
Scratch.extensions.register(new StrictEqualityExtension());