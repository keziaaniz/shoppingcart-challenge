
import data from './acima-10-reais.json';


export function getProductsByCategory(skuName) {
  const products = data.filter((product) => product.skuName === skuName);
  return products;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCategory(req.query.skuName);
    res.status(200).json(products);
  }
}
