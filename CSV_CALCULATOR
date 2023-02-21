import csv

WATER_MAIN_DATA_14 = []
WATER_MAIN_DATA_18 = []
WATER_MAIN_DATA_21 = []
WATER_MAIN_DATA_25 = []

Gravity_Sewer_26 = []
Gravity_Sewer_35 = []

Pressure_Rated_51 = []
Pressure_Rated_41 = []
Pressure_Rated_32 = []
Pressure_Rated_26 = []
Pressure_Rated_21 = []
Pressure_Rated_17 = []

Ductile_Pipe = []

HDPE_IPS_7 = []
HDPE_IPS_9 = []
HDPE_IPS_11 = []
HDPE_IPS_17 = []
HDPE_IPS_21 = []
HDPE_IPS_26 = []
HDPE_IPS_32 = []

HDPE_DIPS_7 = []
HDPE_DIPS_9 = []
HDPE_DIPS_11 = []
HDPE_DIPS_13 = []
HDPE_DIPS_17 = []
HDPE_DIPS_21 = []

STEEL = []

with open('Data_list.csv',"r", encoding="utf-8") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:

        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1

        else:

            # +++++++++++++++++++++++++++++++ PVC WATER MAIN +++++++++++++++++++++++++++++++++++

            if row[1] == "PVC for Water Mains":
                if float(row[7]) == 14:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    WATER_MAIN_DATA_14.append(sublist)

                elif float(row[7]) == 18:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    WATER_MAIN_DATA_18.append(sublist)

                elif float(row[7]) == 21:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    WATER_MAIN_DATA_21.append(sublist)

                elif float(row[7]) == 25:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    WATER_MAIN_DATA_25.append(sublist)

            # +++++++++++++++++++++++++++++++ PVC GRAVITY SEWER +++++++++++++++++++++++++++++++++++

            elif row[1] == "PVC for Gravity Sewer":
                if float(row[7]) == 26:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Gravity_Sewer_26.append(sublist)

                elif float(row[7]) == 35:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Gravity_Sewer_35.append(sublist)

            # +++++++++++++++++++++++++++++++ PVC PRESSURE RATED +++++++++++++++++++++++++++++++++++

            elif row[1] == "PVC Pressure Rated (IPS)":
                if float(row[7]) == 51:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Pressure_Rated_51.append(sublist)

                elif float(row[7]) == 41:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Pressure_Rated_41.append(sublist)

                elif float(row[7]) == 32.5:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Pressure_Rated_32.append(sublist)

                elif float(row[7]) == 26:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Pressure_Rated_26.append(sublist)

                elif float(row[7]) == 21:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Pressure_Rated_21.append(sublist)

                elif float(row[7]) == 17:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    Pressure_Rated_17.append(sublist)

            # +++++++++++++++++++++++++++++++ DUCTILE IRON PIPE +++++++++++++++++++++++++++++++++++

            elif row[1] == "Ductile Iron Pipe":
                sublist = [row[3], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                Ductile_Pipe.append(sublist)

            # +++++++++++++++++++++++++++++++ HDPE PIPE (IPS) +++++++++++++++++++++++++++++++++++

            elif row[1] == "HDPE Pipe (IPS)":
                if float(row[7]) == 7.3:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_7.append(sublist)

                elif float(row[7]) == 9:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_9.append(sublist)

                elif float(row[7]) == 11:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_11.append(sublist)

                elif float(row[7]) == 13.5:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_13.append(sublist)

                elif float(row[7]) == 17:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_17.append(sublist)

                elif float(row[7]) == 21:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_21.append(sublist)

                elif float(row[7]) == 26:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_26.append(sublist)

                elif float(row[7]) == 32.5:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_IPS_32.append(sublist)

            # +++++++++++++++++++++++++++++++ HDPE PIPE (DIPS) +++++++++++++++++++++++++++++++++++

            elif row[1] == "HDPE Pipe (DIPS)":
                if float(row[7]) == 7:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_DIPS_7.append(sublist)

                elif float(row[7]) == 9:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_DIPS_9.append(sublist)

                elif float(row[7]) == 11:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_DIPS_11.append(sublist)

                elif float(row[7]) == 13.5:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_DIPS_13.append(sublist)

                elif float(row[7]) == 17:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_DIPS_17.append(sublist)

                elif float(row[7]) == 21:
                    sublist = [row[3], row[5], row[6], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                    HDPE_DIPS_21.append(sublist)
            # +++++++++++++++++++++++++++++++ STEEL +++++++++++++++++++++++++++++++++++

            elif row[1] == "Steel (NPS)":
                sublist = [row[3], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14]]
                STEEL.append(sublist)

            line_count += 1

    print(WATER_MAIN_DATA_14)
    print(WATER_MAIN_DATA_18)
    print(WATER_MAIN_DATA_21)
    print(WATER_MAIN_DATA_25)

    print(Gravity_Sewer_26)
    print(Gravity_Sewer_35)

    print(Pressure_Rated_51)
    print(Pressure_Rated_41)
    print(Pressure_Rated_32)
    print(Pressure_Rated_26)
    print(Pressure_Rated_21)
    print(Pressure_Rated_17)

    print(Ductile_Pipe)

    print(HDPE_IPS_7)
    print(HDPE_IPS_9)
    print(HDPE_IPS_11)
    print(HDPE_IPS_17)
    print(HDPE_IPS_21)
    print(HDPE_IPS_26)
    print(HDPE_IPS_32)

    print(HDPE_DIPS_7)
    print(HDPE_DIPS_9)
    print(HDPE_DIPS_11)
    print(HDPE_DIPS_13)
    print(HDPE_DIPS_17)
    print(HDPE_DIPS_21)

    print(STEEL)
