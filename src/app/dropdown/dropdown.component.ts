import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  categories: any;
  @ViewChildren(MatSlideToggle) slideToggles!: QueryList<MatSlideToggle>;
  selectedChecks: string[] = [];
  selectedCheckId: string | null = null;

  // assigning id
  private assignIds(): void {
    let categoryId = 1;

    for (const category in this.categories.data.checks) {
      const categoryKey = `${category.toLowerCase()}-${categoryId++}`;

      this.categories.data.checks[categoryKey] =
        // this.categories.data.checks[key];
        this.categories.data.checks[category];

      delete this.categories.data.checks[category];
      // delete this.categories.checks[category];
      this.categories.data.checks[categoryKey].forEach(
        (check: any, index: number) => {
          check.id = `${categoryId - 1}_${index + 1}`;
          console.log(
            `Category: ${categoryKey}, Check Name: ${check.checkName}, ID: ${check.id}`
          );
        }
      );
    }
  }

  // configurations for all categories and checks
  private checkAllConfigurations(): void {
    for (const categoryKey in this.categories.data.checks) {
      if (this.categories.data.checks.hasOwnProperty(categoryKey)) {
        this.categories.data.checks[categoryKey].forEach((check: any) => {
          // this.checkConfigurations(categoryKey,id);
          this.checkConfigurations(categoryKey, check.id);
        });
      }
    }
  }

  // configurations for a specific category and ID
  private checkConfigurations(categoryKey: string, checkId: string): void {
    const checkCategory = this.categories.data.checks[categoryKey];
    // const category = this.categories.checks[categoryKey];

    if (checkCategory) {
      const check = checkCategory.find((c: any) => c.id === checkId);

      if (check) {
        console.log(
          `Category: ${categoryKey}, Check Name: ${check.checkName},ID: ${check.id}`
        );
        console.log(
          `Is Recurring: ${
            check.configuration ? check.configuration.isRecurring : false
          }`
        );
      } else {
        console.log(
          `Category: ${categoryKey}, Check with ID ${checkId} not found`
        );
      }
    } else {
      console.log(`Category: ${categoryKey} not found`);
    }
  }

  constructor() {
    this.categories = {
      type: 'success',
      status: 200,
      message: 'Data fetched successfully',
      data: {
        checks: {
          Nationality: [
            {
              checkId: 1,
              checkName: 'Aadhaar card',
              checkType: 'API',
              checkCategory: 'Nationality',
              checkSortId: 1,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: true,
                checkDropDownOptions: null,
                isRecurring: true,
                recurringOptions: {
                  options: ['Monthly', 'Quarterly', 'Halfyearly', 'Yearly'],
                  selectType: 'single',
                },
                isExpectingDocument: false,
                expectedDocuments: null,
              },
            },
            {
              checkId: 2,
              checkName: 'Driving license',
              checkType: 'API',
              checkCategory: 'Nationality',
              checkSortId: 2,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: true,
                recurringOptions: {
                  options: ['Monthly', 'Quarterly', 'Halfyearly', 'Yearly'],
                  selectType: 'single',
                },
                isExpectingDocument: false,
                expectedDocuments: null,
              },
            },
            {
              checkId: 3,
              checkName: 'PAN card',
              checkType: 'API',
              checkCategory: 'Nationality',
              checkSortId: 3,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: true,
                recurringOptions: {
                  options: ['Monthly', 'Quarterly', 'Halfyearly', 'Yearly'],
                  selectType: 'single',
                },
                isExpectingDocument: false,
                expectedDocuments: null,
              },
            },
            {
              checkId: 4,
              checkName: 'Voter ID',
              checkType: 'API',
              checkCategory: 'Nationality',
              checkSortId: 4,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: true,
                recurringOptions: {
                  options: ['Monthly', 'Quarterly', 'Halfyearly', 'Yearly'],
                  selectType: 'single',
                },
                isExpectingDocument: false,
                expectedDocuments: null,
              },
            },
            {
              checkId: 5,
              checkName: 'Passport',
              checkType: 'API',
              checkCategory: 'Nationality',
              checkSortId: 5,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: true,
                recurringOptions: {
                  options: ['Monthly', 'Quarterly', 'Halfyearly', 'Yearly'],
                  selectType: 'single',
                },
                isExpectingDocument: false,
                expectedDocuments: null,
              },
            },
          ],
          Education: [
            {
              checkId: 6,
              checkName: 'Highest qualification',
              checkType: 'PARTNER',
              checkCategory: 'Education',
              checkSortId: 1,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: ['Marksheet', 'Certificate', 'Both'],
                  selectType: 'single',
                },
              },
            },
            {
              checkId: 7,
              checkName: '10th board',
              checkType: 'PARTNER',
              checkCategory: 'Education',
              checkSortId: 5,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: ['Marksheet', 'Certificate', 'Both'],
                  selectType: 'single',
                },
              },
            },
            {
              checkId: 8,
              checkName: '12th board',
              checkType: 'PARTNER',
              checkCategory: 'Education',
              checkSortId: 4,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: ['Marksheet', 'Certificate', 'Both'],
                  selectType: 'single',
                },
              },
            },
            {
              checkId: 9,
              checkName: 'Degree',
              checkType: 'PARTNER',
              checkCategory: 'Education',
              checkSortId: 3,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: ['Marksheet', 'Certificate', 'Both'],
                  selectType: 'single',
                },
              },
            },
            {
              checkId: 10,
              checkName: 'Post graduation',
              checkType: 'PARTNER',
              checkCategory: 'Education',
              checkSortId: 2,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: ['Marksheet', 'Certificate', 'Both'],
                  selectType: 'single',
                },
              },
            },
            {
              checkId: 11,
              checkName: 'Master of philosophy',
              checkType: 'PARTNER',
              checkCategory: 'Education',
              checkSortId: 2,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: ['Marksheet', 'Certificate', 'Both'],
                  selectType: 'single',
                },
              },
            },
            {
              checkId: 12,
              checkName: 'Doctor of philosophy',
              checkType: 'PARTNER',
              checkCategory: 'Education',
              checkSortId: 2,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: ['Marksheet', 'Certificate', 'Both'],
                  selectType: 'single',
                },
              },
            },
          ],
          'Criminal background': [
            {
              checkId: 13,
              checkName: 'Police verification',
              checkType: 'PARTNER',
              checkCategory: 'Criminal background',
              checkSortId: 1,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: false,
                checkDropDownOptions: null,
                isRecurring: true,
                recurringOptions: {
                  options: ['Monthly', 'Quarterly', 'Halfyearly', 'Yearly'],
                  selectType: 'single',
                },
                isExpectingDocument: false,
                expectedDocuments: null,
              },
            },
          ],
          'Work experience': [
            {
              checkId: 14,
              checkName: 'Employment based on',
              checkType: 'PARTNER',
              checkCategory: 'Work experience',
              checkSortId: 1,
              checkStatus: 1,
              configuration: {
                isCheckDropdown: true,
                checkDropDownOptions: {
                  count: true,
                  options: [
                    'No. of years',
                    'No. of Employment',
                    'All previous employments',
                  ],
                  countValue: 0,
                  selectType: 'single',
                },
                isRecurring: false,
                recurringOptions: null,
                isExpectingDocument: true,
                expectedDocuments: {
                  options: [
                    'Appointment Letter',
                    'Release Letter',
                    'Certificates',
                    'Letter',
                  ],
                  selectType: 'multi',
                },
              },
            },
          ],
        },
        enterprisePartners: [
          {
            id: 1,
            name: 'Document Verifier',
            isDefault: false,
          },
          {
            id: 2,
            name: 'Partner Agency 2',
            isDefault: false,
          },
          {
            id: 137,
            name: 'Partner Agency 2',
            isDefault: false,
          },
          {
            id: 138,
            name: 'Partner Agency 2',
            isDefault: false,
          },
          {
            id: 139,
            name: 'Enterprise Agency 2',
            isDefault: false,
          },
          {
            id: 142,
            name: 'Mayank',
            isDefault: false,
          },
          {
            id: 146,
            name: 'OBPP Partner',
            isDefault: false,
          },
          {
            id: 150,
            name: 'OXY Beaumonde',
            isDefault: false,
          },
          {
            id: 152,
            name: 'RK Industries Partner',
            isDefault: false,
          },
          {
            id: 154,
            name: 'Fact Check',
            isDefault: false,
          },
          {
            id: 159,
            name: 'Treeni solutions pvt.ltd.',
            isDefault: false,
          },
          {
            id: 160,
            name: 'background verifier',
            isDefault: false,
          },
          {
            id: 164,
            name: 'Wanderu Ibotta',
            isDefault: false,
          },
          {
            id: 165,
            name: 'JON',
            isDefault: false,
          },
          {
            id: 166,
            name: 'Ebola',
            isDefault: false,
          },
        ],
      },
    };
    this.assignIds();
    // const categoryId = 1;
    // const checkId = 1;
    // this.checkConfigurations('nationality', categoryId, checkId);
    this.checkAllConfigurations();
  }

  // checks
  getCategoryKeys(): string[] {
    return Object.keys(this.categories.data.checks);
  }

  getCategoryName(categoryKey: string): string {
    return categoryKey.split('-')[0];
    // return category.id.split('-')[0];
  }

  getChecks(categoryKey: string): any[] {
    return this.categories.data.checks[categoryKey];
  }

  // onSelectCheck(checkId: string) {
  //   this.selectedCheckId = checkId;
  // }

  // isCheckSelected(checkId: string): boolean {
  //   return this.selectedCheckId === checkId;
  // }

  onSelectCheck(checkId: string): void {
    const index = this.selectedChecks.indexOf(checkId);
    if (index === -1) {
      // Check not selected, add to the list
      this.selectedChecks.push(checkId);
    } else {
      // Check already selected, remove from the list
      this.selectedChecks.splice(index, 1);
    }
    console.log('Selected Checks:', this.selectedChecks);
  }

  isCheckSelected(checkId: string): boolean {
    return this.selectedChecks.includes(checkId);
  }

  ngAfterViewInit() {
    // Log the IDs of the slide toggles to the console
    this.slideToggles.forEach((toggle) => {
      console.log('Toggle ID:', toggle.id);
    });
  }
}
