import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import Products from './components/products/Products';

function App() {
  return (
    <div>
      <Header/>
      <div className='home flex justify-between px-6 gap-10'>
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)]">
          <Categories/>
        </div>
        <div className="products flex-[8]">
          <Products/>
        </div>
        <div>
          <div>cart totals</div>
        </div>
      </div>
    </div>
  );
}

export default App;
