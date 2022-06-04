import chalk from 'chalk';
import app from './app.js';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(chalk.bold.blue(`Server is opening in port ${PORT}`));
});
