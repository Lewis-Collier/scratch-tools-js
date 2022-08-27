class ScratchTools {
     
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
        },

            {
          opcode: 'goto',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Go to [URL]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue:'https://scratch.mit.edu/'
            },
         }
       }
     ]
    };
  
}}

isexactly(args); {
    return args.ONE === args.TWO;
  }
isnot(args); {
       return args.ONE != args.TWO;
  }
goto(args); {
   window.open(args.URL);
}

Scratch.extensions.register(new ScratchTools());