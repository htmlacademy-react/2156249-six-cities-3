import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '.';
import { Offer } from '@/types/offer';
import { AuthData } from '@/types/auth-data';
import { UserData } from '@/types/user-data';
import { APIRoute, AuthorizationStatus } from '@/const';
import { loadOffers, requireAuthorization } from './actions';
import { saveToken, dropToken } from '@/services/token';

// Загрузка предложений
export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(loadOffers(data));
});

// Проверка авторизации
export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

// Вход
export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(data.token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
});

// Выход
export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
