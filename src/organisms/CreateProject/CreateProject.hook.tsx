import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {
  nextPage,
  previousPage,
  updateFormData,
} from '../../store/reducers/createProjectSlice';

export const useCreateProject = () => {
  const dispatch = useDispatch();
  const currentPageIndex = useSelector(
    (state: RootState) => state.createProject.currentPageIndex
  );
  const formData = useSelector(
    (state: RootState) => state.createProject.formData
  );
  const completedSteps = useSelector(
    (state: RootState) => state.createProject.completedSteps
  );
  const pages = useSelector((state: RootState) => state.createProject.pages);

  const handleNext = () => {
    dispatch(nextPage());
  };

  const handlePrevious = () => {
    dispatch(previousPage());
  };

  const updatePageData = (page: string, data: Record<string, unknown>) => {
    dispatch(updateFormData({ page: page as PageKey, data }));
  };

  return {
    currentPageIndex,
    formData,
    completedSteps,
    pages,
    handleNext,
    handlePrevious,
    updatePageData,
  };
};
