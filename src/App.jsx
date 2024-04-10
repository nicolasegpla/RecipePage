import img1 from './assets/images/image-omelette.jpeg'

import './App.css'

function App() {

  const preparationTime = [
    {title: 'Total', description: 'Approximately 10 minutes'},
    {title: 'Preparation', description: '5 minutes'},
    {title: 'cooking', description: '5 minutes'},
  ];

  const ingredients = ['2-3 large eggs', 'Salt to taste', 'pepper to taste', '1 tablespoon of butter or oil', 'option filings: cheese, diced vegetables, cooked meats, herbs'];

  const instructions = [
    'Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    'Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.',
    'Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    'Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    'Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    'Enjoy: Serve hot, with additional salt and pepper if needed.'
  ]

  const nutrition = [
    {title: 'Calories', text: '277Kcal'},
    {title: 'Carbs', text: '0g'},
    {title: 'Protein', text: '20g'},
    {title: 'Fat', text: '22g'}
  ]
  
  return (
    <>
      <div>
        <div>
          <picture>
            <source srcSet={img1} media='(min-width: 600px)' />
            <img src={img1} alt="" />
          </picture>
          
        </div>
        <div>
          <section>
            <h1>Simple Omelette Recipe</h1>
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </section>
          <section>
            <p>Preparation time</p>
            <ul>
              {preparationTime.map((item) =>                 (<li key={item.title}>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </li>)
              )}
            </ul>
          </section>
          <section>
            <h2>Ingredients</h2>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Instructions</h2>
            <ul>
              {instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
              {nutrition.map((item) => (
                <tr key={item.title}>
                  <th>{item.title}</th>
                  <th>{item.text}</th>
                </tr>
              ))}
            </table>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
