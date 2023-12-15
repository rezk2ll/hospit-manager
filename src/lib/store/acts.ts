import { writable } from 'svelte/store';
import type {
	ClinicalExamsResponse,
	MedicalActsResponse,
	SurgicalActsResponse
} from '../../pocketbase-types';

export const medicalActs = writable<MedicalActsResponse[]>();
export const surgivalActs = writable<SurgicalActsResponse[]>();
export const clinicalExams = writable<ClinicalExamsResponse[]>();
