import React from 'react';

import {
	EducationItem,
	EducationItemProps,
} from '../../components/resume-items/EducationItem/EducationItem';
import {
	PresentationItem,
	PresentationItemProps,
} from '../../components/resume-items/PresentationItem/PresentationItem';
import {
	ResumeItem,
	ResumeItemProps,
} from '../../components/resume-items/ResumeItem/ResumeItem';
import {
	SkillsList,
	SkillsListProps,
} from '../../components/resume-items/SkillsList/SkillsList';
import {
	WorkExperienceItem,
	WorkExperienceItemProps,
} from '../../components/resume-items/WorkExperienceItem/WorkExperienceItem';

import './resume.css';

export interface ResumeSectionProps {
	sectionName: string;
	sectionType: string;
	finePrint?: React.ReactNode;
	items:
		| EducationItemProps[]
		| PresentationItemProps[]
		| ResumeItemProps[]
		| SkillsListProps[]
		| WorkExperienceItemProps[];
	className?: string;
}

/**
 * Resume Section helper component
 */
export const ResumeSection = ({
	sectionName,
	sectionType,
	finePrint,
	items,
	...props
}: ResumeSectionProps) => {
	// Set up classes.
	const baseClass = 'mm-resume-section';
	const sectionTypeClass = `${baseClass}--${sectionType}`;

	// Render the output.
	return (
		<div
			className={[baseClass, sectionTypeClass, props.className]
				.join(' ')
				.trim()
				.replace(/\s+/g, ' ')}
			{...props}
		>
			<h2 className={`${baseClass}__section-title`}>{sectionName}</h2>
			<div className={`${baseClass}__section-items`}>
				{items.map(
					(
						item:
							| EducationItemProps
							| PresentationItemProps
							| ResumeItemProps
							| SkillsListProps
							| WorkExperienceItemProps,
						index: number,
					) => {
						return (
							<div key={index} className={`${baseClass}__section-item`}>
								{sectionType === 'education' && (
									<EducationItem {...(item as EducationItemProps)} />
								)}
								{sectionType === 'presentations' && (
									<PresentationItem {...(item as PresentationItemProps)} />
								)}
								{sectionType === 'skills' && (
									<SkillsList {...(item as SkillsListProps)} />
								)}
								{sectionType === 'work-experience' && (
									<WorkExperienceItem {...(item as WorkExperienceItemProps)} />
								)}
								{sectionType === 'resume' && (
									<ResumeItem {...(item as ResumeItemProps)} />
								)}
							</div>
						);
					},
				)}
			</div>
			{finePrint && <p className={`${baseClass}__fine-print`}>{finePrint}</p>}
		</div>
	);
};
