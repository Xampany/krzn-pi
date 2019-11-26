/**
 * Repräsentiert eine einzelne Led (wie auf dem Pi)
 */
export interface Led {
  /**
   * Der 0-basierte Index
   */
  index: number;
  /**
   * Die Farbe als gültiger CSS Farbwert
   */
  color: string;
  /**
   * Die Durchsichtigkeit (0 = transparent, 1 = undurchsichtig)
   */
  opactity?: number;
}
