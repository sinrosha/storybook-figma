import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'myStories',
  decorators: [withDesign],
}

export const myStory = () => <button>Button</button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/eNg3vLup7JJOlEENrtyjbk/Components?node-id=3%3A1223',
  },
}