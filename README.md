# MVST-Challenge

The challenge was to replicate GitHub's repository list section. Checkout my implementation here: [Github Repositories](https://mvst-challenge-one.vercel.app/)

## Description

I thought it would be a fun challenge to get it as close to github itself as possible. So i utilized GitHub's react/primer library to use their components. This resulted in a pretty excat clone. Other than that I utilized all their REST Api to fetch all available data. I added the option to add a custom GitHub username to make it a bit more interactive. Heres a list of the achieved objectives:

- ✅ Used React and Typescript
- ✅ display searchable list of repositories
- ✅ Add ability to input any github username
- ✅ Responsive UI
- ✅ Deployed with [Vercel](https://mvst-challenge-one.vercel.app/)
- ✅ Documented code
- ✅ Used storybook fort UI testing

## Run Locally

Clone the project

```bash
  git clone git@github.com:timothymaxwellsummers/mvst-challenge.git
```

Install dependencies with npm

```bash
  npm install
```
List of some dependencies:
- [primer/react] (https://primer.style/react/getting-started)
- [axios] (https://www.npmjs.com/package/axios)
- [storybook] (https://storybook.js.org/docs/react/get-started/install/)



Start next.js server

```bash
  npm run dev
```

Start the storybook server

```bash
  npm run storybook
```

## Future Improvements

- There is some data that the api doesn't provide -> could be scraped and added
- Bug fixes 🐛
- Implement GitHub itself ... haha ;)

> Btw I really liked the challenge. I used primer/react and storybook for the first time which was a fun and interesting task. 🤓