import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

import { taskSchema } from '@/pages/matching-list/data/schema';

import { ApiResponse } from '@/types/api';
import { Task } from '@/types/entities/task';

// Replace with your actual API endpoint
const API_ENDPOINT = '';

export function useTasksQuery() {
  return useQuery('tasks', async () => {
    const response = await axios.get<ApiResponse<Task[]>>(API_ENDPOINT);
    return z.array(taskSchema).parse(response.data.data);
  });
}
