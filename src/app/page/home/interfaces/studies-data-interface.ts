import { FrameworksInterface } from "./frameworks-interface";
import { LenguagesInterface } from "./lenguages-interface";

export interface StudiesDataInterface {
    highSchool: SchoolsInformationInterface;
    university: SchoolsInformationInterface;
    lenguages: LenguagesInterface;
    frameworks: FrameworksInterface;
}

export interface SchoolsInformationInterface {
    career: string;
    name: string;
}
