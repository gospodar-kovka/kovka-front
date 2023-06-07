import axios from 'axios';
import { BACKEND_URL } from '../../constants';
import {
  ICreateProductVariables,
  IDeleteProductVariables,
  IGetProductByIdResponce,
  IGetProductByIdVariables,
  IGetProductsResponce,
  IGetProductsVariables,
  IProductSubtype,
  IProductType,
  IUpdateProductVariables,
  UploadProductImage,
} from './types';

export const getProducts = async ({ filter }: IGetProductsVariables) => {
  try {
    const products = await axios.get<IGetProductsVariables, IGetProductsResponce>(
      `${BACKEND_URL}/getProducts`,
      {
        params: filter,
      },
    );

    return products.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductById = async ({ id }: IGetProductByIdVariables) => {
  try {
    const product = await axios.get<IGetProductByIdVariables, IGetProductByIdResponce>(
      `${BACKEND_URL}/getProductById`,
      {
        params: { id },
      },
    );

    return product.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductTypes = async () => {
  try {
    const productTypes = await axios.get<IProductType[]>(`${BACKEND_URL}/getProductTypes`);

    return productTypes.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductSubtypes = async () => {
  try {
    const productSubtypes = await axios.get<IProductSubtype[]>(`${BACKEND_URL}/getProductSubtypes`);

    return productSubtypes.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateProduct = async ({
  title,
  price,
  img,
  id,
  type,
  subtype,
  description,
  width,
  height,
}: IUpdateProductVariables) => {
  //Hidden for security
};

export const uploadProductImage = async ({ image }: UploadProductImage) => {
  //Hidden for security
  return ''
};

export const createProduct = async ({
  img,
  title,
  price,
  type,
  subtype,
  description,
  width,
  height,
}: ICreateProductVariables) => {
  //Hidden for security
};

export const deleteProduct = async ({ id }: IDeleteProductVariables) => {
  //Hidden for security
};
