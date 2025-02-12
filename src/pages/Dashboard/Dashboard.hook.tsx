import { useState, useEffect } from 'react';
import { fetchProjectListQuery } from '../../graphql/query/projectList';
import { useDispatch } from 'react-redux';
import { setProjects } from '../../store/reducers/projectDataSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useDashboardLogic = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const projects = useSelector((state: RootState) => state.projects.projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await fetchProjectListQuery(2);
        if (projectData) {
          dispatch(setProjects(projectData));
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [dispatch]);

  return {
    loading,
    error,
    projects,
  };
};
