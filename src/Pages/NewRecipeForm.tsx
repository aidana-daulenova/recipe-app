import {
  Fieldset,
  Stack,
  Text,
  Button,
  Field,
  Input,
  Portal,
  Select,
  createListCollection,
  Textarea,
  FileUpload,
} from "@chakra-ui/react";
import { LuFileImage } from "react-icons/lu";
import { useRecipe } from "@/hooks/useRecipe";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { FileUploadList } from "@chakra-ui/react";
import { useEffect } from "react";

export default function AddNewRecipe() {
  const frameworks = createListCollection({
    items: [
      { label: "Breakfast", value: "Breakfast" },
      { label: "Lunch", value: "Lunch" },
      { label: "Dinner", value: "Dinner" },
      { label: "Dessert", value: "Dessert" },
      { label: "Baking", value: "Baking" },
    ],
  });
  const { recipes, addRecipe, updateRecipe } = useRecipe();
  const { id: recipeId } = useParams();
  const isEditMode = Boolean(recipeId);
  const currentRecipe = recipes.find((r) => String(r.id) === String(recipeId));

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      title: currentRecipe?.title || "",
      mealType: currentRecipe?.mealType || "",
      description: currentRecipe?.description || "",
    },
  });

  useEffect(() => {
    if (isEditMode && currentRecipe) {
      reset({
        title: currentRecipe.title,
        mealType: currentRecipe.mealType,
        description: currentRecipe.description,
      });
    }
  }, [isEditMode, currentRecipe, reset]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (isEditMode && currentRecipe) {
      const updatedRecipe = {
        id: currentRecipe.id,
        title: data.title,
        mealType: data.mealType,
        description: data.description,
        imageUrl: currentRecipe.imageUrl,
      };

      updateRecipe(updatedRecipe);
    } else {
      const myNewRecipe = {
        id: crypto.randomUUID(),
        title: data.title,
        mealType: data.mealType,
        description: data.description,
        imageUrl:
          "https://asset.jamieoliver.com/images/cq7w2e71/production/21ed656d7d793dfbf1b30af1217abf76d0088c42-1064x1280.jpg/163194080?rect=52,0,960,1280&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
      };

      addRecipe(myNewRecipe);
    }
    navigate("/my-recipes");
  };

  return (
    <Stack minH="10vh" pt={2}>
      <Fieldset.Root size="lg" maxW="lg">
        <Stack>
          <Fieldset.Legend>
            <Text textStyle="2xl">Adding new recipe</Text>
          </Fieldset.Legend>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Field.Root required>
              <Field.Label>
                Recipe name
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("title")} />
            </Field.Root>

            <Controller
              name="mealType"
              control={control}
              render={({ field }) => (
                <Select.Root
                  size="sm"
                  maxW="lg"
                  collection={frameworks}
                  value={field.value ? [field.value] : []}
                  onValueChange={(details) => {
                    const [selectedValue] = details.value;
                    field.onChange(selectedValue);
                  }}
                >
                  <Select.HiddenSelect />

                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Meal type" />
                    </Select.Trigger>
                  </Select.Control>

                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {frameworks.items.map((framework) => (
                          <Select.Item item={framework} key={framework.value}>
                            {framework.label}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              )}
            />

            <Field.Root>
              <Field.Label>Ingredients (temporary solutions)</Field.Label>
              <Input />
            </Field.Root>

            <Field.Root>
              <Field.Label>Method</Field.Label>
              <Textarea autoresize {...register("description")} />
            </Field.Root>

            <FileUpload.Root accept="image/*" maxFiles={1}>
              <FileUpload.HiddenInput {...register("imageUrl")} />
              <FileUpload.Trigger asChild>
                <Button variant="outline" size="sm">
                  <LuFileImage /> Upload Images
                </Button>
              </FileUpload.Trigger>
              <FileUploadList />
            </FileUpload.Root>

            <Field.Root>
              <Button alignSelf="flex-start" mt={3} type="submit">
                Save
              </Button>
            </Field.Root>
          </Stack>
        </form>
      </Fieldset.Root>
    </Stack>
  );
}
