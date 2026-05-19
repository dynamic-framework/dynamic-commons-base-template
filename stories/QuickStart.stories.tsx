import type { Meta, StoryObj } from '@storybook/react-vite';

const QuickStartPage = () => (
  <div style={{
    maxWidth: 800, margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif', lineHeight: 1.7,
  }}
  >
    <h1>Dynamic Commons Base Template</h1>
    <p>
      This repository provides a robust starting point for organizations to build and share
      common UI components and patterns using the
      {' '}
      <strong>Dynamic Framework</strong>
      .
    </p>

    <hr />

    <h2>Purpose</h2>
    <ul>
      <li>Serve as a reference and foundation for scalable, maintainable component libraries.</li>
      <li>Encourage consistency and best practices across teams.</li>
      <li>Enable rapid prototyping and documentation with Storybook.</li>
    </ul>

    <hr />

    <h2>Motivation</h2>
    <p>
      Many organizations need a shared set of UI components and design patterns that can be easily
      extended and documented. This template helps teams:
    </p>
    <ul>
      <li>Avoid reinventing the wheel for common UI needs.</li>
      <li>Document and showcase components interactively.</li>
      <li>Foster collaboration and knowledge sharing across the organization.</li>
    </ul>

    <hr />

    <h2>How to Use</h2>

    <h3>1. Clone this repository and install dependencies</h3>
    <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: 4 }}>
      <code>
        {`git clone <repo-url>
cd dynamic-commons-base-template
npm install`}
      </code>
    </pre>

    <h3>2. Start Storybook to explore and develop components</h3>
    <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: 4 }}>
      <code>npm run storybook</code>
    </pre>

    <h3>3. Add your own components</h3>
    <p>
      Place new components in the
      {' '}
      <code>src/components</code>
      {' '}
      directory and document them with
      stories in
      {' '}
      <code>stories/components</code>
      .
    </p>

    <h3>4. Customize and extend</h3>
    <p>Adapt the template to fit your organization&apos;s design system and component needs.</p>

    <hr />

    <h2>Project Structure</h2>
    <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: 4 }}>
      <code>
        {`src/
  components/    # Shared UI components
  utils/         # Utility functions
stories/
  components/    # Storybook stories for each component`}
      </code>
    </pre>

    <p>
      For more details, see the
      {' '}
      <code>README.md</code>
      {' '}
      in the root of the project.
    </p>
  </div>
);

const meta: Meta<typeof QuickStartPage> = {
  title: 'Quick Start',
  component: QuickStartPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Quick start guide for the Dynamic Commons Base Template.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuickStartPage>;

export const Default: Story = {
  name: 'Quick Start',
};
