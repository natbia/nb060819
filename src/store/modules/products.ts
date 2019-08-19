import { VuexModule, Module } from 'vuex-module-decorators';
import store from '@/store';
import { Product } from '../models';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'products',
  store
})
class ProductsModule extends VuexModule {
  private global: Product[] = [];
}
