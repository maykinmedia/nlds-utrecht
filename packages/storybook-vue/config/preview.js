import { app } from '@storybook/vue3';
import {
  BadgeStatus,
  Button,
  Checkbox,
  FormField,
  FormFieldset,
  FormFieldsetLegend,
  FormLabel,
  Heading,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Select,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-vue';
import '@utrecht/component-library-vue/dist/style.css';
import '@utrecht/design-tokens/dist/index.css';

app.component('BadgeStatus', BadgeStatus);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('FormFieldset', FormFieldset);
app.component('FormFieldsetLegend', FormFieldsetLegend);
app.component('FormField', FormField);
app.component('FormLabel', FormLabel);
app.component('Heading', Heading);
app.component('PageContent', PageContent);
app.component('PageFooter', PageFooter);
app.component('PageHeader', PageHeader);
app.component('Paragraph', Paragraph);
app.component('Select', Select);
app.component('Table', Table);
app.component('TableBody', TableBody);
app.component('TableCaption', TableCaption);
app.component('TableCell', TableCell);
app.component('TableFooter', TableFooter);
app.component('TableHeader', TableHeader);
app.component('TableHeaderCell', TableHeaderCell);
app.component('TableRow', TableRow);

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div class="utrecht-theme"><story /></div>',
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
