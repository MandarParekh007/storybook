import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface BottomSheetProps<T> {
  state: T;
  setState: (newState: T) => void;
  OPTIONS: Record<string, string[] | boolean[]>;
}

export function BottomSheet<T extends Record<string, any>>({ state, setState, OPTIONS }: BottomSheetProps<T>) {
  return (
    <Sheet>
      {/* Open Button */}
      <SheetTrigger asChild className="fixed right-[46%] bottom-[10%]">
        <Button variant="outline">Customize <ArrowBigUp /></Button>
      </SheetTrigger>

      {/* Bottom Sheet Content */}
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Customize Component</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-4">
          {Object.entries(state).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium capitalize">{key}</label>

              {OPTIONS[key] ? (
                // Use dropdown for predefined options
                <Select
                  onValueChange={(newValue: string | boolean) => setState({ ...state, [key]: newValue == "true" ? true : newValue == "false" ? false : newValue })}
                  defaultValue={String(value)} // ✅ Ensures value is always a string
                >
                  <SelectTrigger>
                    <SelectValue value={String(value)} placeholder={`Select ${key}`} /> {/* ✅ Fix for correct display */}
                  </SelectTrigger>
                  <SelectContent>
                    {OPTIONS[key].map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                // Use text input for other values
                <Input
                  value={value}
                  onChange={(e) => setState({ ...state, [key]: e.target.value })}
                />
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}