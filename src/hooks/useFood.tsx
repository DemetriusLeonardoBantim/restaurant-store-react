import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import api from '../services/api';

interface Foods {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

type FoodInput = Omit<Foods, 'id' | 'available'>;

interface FoodProviderProps {
  children: ReactNode;
}

interface FoodContextData {
  foods: Foods[];
  createFood: (food: FoodInput) => Promise<void>;
  removeFood: (productId: number) => void;
}

const FoodContext = createContext<FoodContextData>({} as FoodContextData);

export function FoodProvider({ children }: FoodProviderProps) {
  const [foods, setFoods] = useState<Foods[]>([]);

  useEffect(() => {
    api.get('foods').then((response) => setFoods(response.data));
  }, []);

  async function createFood(foodInput: FoodInput) {
    const response = await api.post('foods', {
      ...foodInput,
      available: Boolean(),
    });
    const { food } = response.data;
    setFoods([...foods, food]);
  }

  const removeFood = (foodId: number) => {
    try {
      const foodItem = foods.find((food) => food.id === foodId);
      if (foodItem !== undefined) {
        const newFood = foods.filter((food) => food.id !== foodId);
        setFoods(newFood);
      }
    } catch {
      console.log(Error);
    }
  };

  return (
    <FoodContext.Provider value={{ foods, createFood, removeFood }}>
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  const context = useContext(FoodContext);
  return context;
}
