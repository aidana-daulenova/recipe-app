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
  Float,
  useFileUploadContext,
} from "@chakra-ui/react";
import { LuFileImage, LuX } from "react-icons/lu";
import { useRecipe } from "@/hooks/useRecipe";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
  const { addRecipe } = useRecipe();

  const { register, handleSubmit, control } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const myNewRecipe = {
      id: data.id,
      title: data.title,
      mealType: data.mealType,
      description: data.description,
      imageUrl: data.imageUrl,
    };

    addRecipe(myNewRecipe);
    navigate("/my-recipes");
  };

  const FileUploadList = () => {
    const fileUpload = useFileUploadContext();
    const files = fileUpload.acceptedFiles;
    if (files.length === 0) return null;
    return (
      <FileUpload.ItemGroup>
        {files.map((file) => (
          <FileUpload.Item
            w="auto"
            boxSize="20"
            p="2"
            file={file}
            key={file.name}
          >
            <FileUpload.ItemPreviewImage />
            <Float placement="top-end">
              <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
                <LuX />
              </FileUpload.ItemDeleteTrigger>
            </Float>
          </FileUpload.Item>
        ))}
      </FileUpload.ItemGroup>
    );
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
                  onValueChange={(e) => field.onChange(e.value[0])}
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
