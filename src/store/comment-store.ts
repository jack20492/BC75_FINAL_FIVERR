import { create } from 'zustand';

type CommentStore = {
  refetchComments: () => void;
  setRefetchComments: (refetch: () => void) => void;
};

export const useCommentStore = create<CommentStore>((set) => ({
  refetchComments: () => {},
  setRefetchComments: (refetch: () => void) => set({ refetchComments: refetch }),
}));
