import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import { AJUAN_CONTENT, AjuanDataType } from '@/content/ajuan';

type AjuanStoreType = {
  data: AjuanDataType[];
  setSedekah: (id: number) => void;
  setTerima: (id: number) => void;
};

const useAjuanStoreBase = create<AjuanStoreType>((set) => ({
  data: AJUAN_CONTENT,
  setSedekah: (id) => {
    set(
      produce<AjuanStoreType>((state) => {
        const temp: AjuanDataType[] = state.data.map((ajuan) => {
          if (ajuan.id === id) {
            return {
              ...ajuan,
              status: 'gifted',
            };
          }

          return ajuan;
        });
        state.data = temp;
      }),
    );
  },
  setTerima: (id) => {
    set(
      produce<AjuanStoreType>((state) => {
        const temp: AjuanDataType[] = state.data.map((ajuan) => {
          if (ajuan.id === id) {
            return {
              ...ajuan,
              status: 'accepted',
            };
          }

          return ajuan;
        });
        state.data = temp;
      }),
    );
  },
}));

const useAjuanStore = createSelectorHooks(useAjuanStoreBase);

export default useAjuanStore;
