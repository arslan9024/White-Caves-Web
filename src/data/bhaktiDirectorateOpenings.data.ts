/**
 * bhaktiDirectorateOpenings.data.ts — 12 Locked Corporate Directorate Executive Openings
 * Synchronized with BHAKTI_LOCKED_DEPARTMENTS_12 per TURING-ECOSYSTEM-SYNC-016 (< 350 lines).
 */

export interface DirectorateCareerOpening {
  deptCode: string;
  dirCode: string;
  departmentName: string;
  directorTitle: string;
  managerOpeningsCount: number;
  location: string;
}

export const LOCKED_12_DIRECTORATE_OPENINGS: DirectorateCareerOpening[] = [
  { deptCode: 'DEPT-01', dirCode: 'DIR-01', departmentName: 'Customer Experience, Concierge & Hospitality', directorTitle: 'Director of Customer Experience & Hospitality', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-02', dirCode: 'DIR-02', departmentName: 'Marketing, Branding & Digital Acquisition', directorTitle: 'Director of Marketing & Brand Acquisition', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-03', dirCode: 'DIR-03', departmentName: 'Human Resources, Performance & Recruiting', directorTitle: 'Director of Human Resources & Performance', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-04', dirCode: 'DIR-04', departmentName: 'Technology, Systems & Digital Infrastructure', directorTitle: 'Chief Technology & Digital Infrastructure Director', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-05', dirCode: 'DIR-05', departmentName: 'Sales, Services & Operations', directorTitle: 'Director of Sales & Deal Operations', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-06', dirCode: 'DIR-06', departmentName: 'Inventory, Portfolio & Asset Management', directorTitle: 'Director of Inventory & Asset Management', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-07', dirCode: 'DIR-07', departmentName: 'Partnerships, Alliances & Capital Growth', directorTitle: 'Director of Strategic Alliances & Capital Growth', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-08', dirCode: 'DIR-08', departmentName: 'Media, Public Relations & Communications', directorTitle: 'Director of Media & Public Relations', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-09', dirCode: 'DIR-09', departmentName: 'Research, Analytics & Market Intelligence', directorTitle: 'Chief Research & Intelligence Director', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-10', dirCode: 'DIR-10', departmentName: 'Accounting, Finance & Tax', directorTitle: 'Chief Financial Director', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-11', dirCode: 'DIR-11', departmentName: 'Legal, Compliance & Audit', directorTitle: 'Chief Legal & Compliance Officer', managerOpeningsCount: 9, location: 'Dubai, UAE' },
  { deptCode: 'DEPT-12', dirCode: 'DIR-12', departmentName: 'Executive, Governance & Strategy', directorTitle: 'Director of Strategic Governance & Enterprise Operations', managerOpeningsCount: 9, location: 'Dubai, UAE' },
];
