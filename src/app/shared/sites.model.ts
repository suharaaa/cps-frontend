export class Site {
        private siteNo: string;
        private siteName:  string;
        private siteManagerName: string;
        private location: string;
        private budget: number;

        constructor(value) {
                this.siteNo = value.siteNo;
                this.siteName = value.siteName;
                this.siteManagerName = value.siteManagerName;
                this.location = value.location;
                this.budget = value.budget;
        }

        public get getSiteNo() : string {
                return this.siteNo;
        }

        public set setSiteNo(siteNo : string) {
                this.siteNo = siteNo;
        }

        public get getSiteName() : string {
                return this.siteName;
        }

        public set setSiteName(siteName : string) {
                this.siteName = siteName;
        }

        public get getSiteManagerName() : string {
                return this.siteManagerName;
        }

        public set setSiteManagerName(siteManagerName : string) {
                this.siteManagerName = siteManagerName;
        }

        public get getLocation() : string {
                return this.location;
        }

        public set setLocation(location : string) {
                this.location = location;
        }

        public get getBudget() : number {
                return this.budget;
        }

        public set setBudget(budget : number) {
                this.budget = budget;
        }

}        